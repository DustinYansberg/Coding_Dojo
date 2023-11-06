using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.AspNetCore.Mvc.Filters;
using ProductsAndCategories.Models;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography.X509Certificates;

namespace ProductsAndCategories.Controllers;

public class CategoryController : Controller
{
    private readonly ILogger<CategoryController> _logger;
    private MyContext _context;

    public CategoryController(ILogger<CategoryController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("categories")]
    public IActionResult Categories()
    {
        ViewBag.AllCategories = _context.Categories.ToList();
        return View("_AddCategory");
    }

    [HttpPost("categories/create")]
    public IActionResult CreateCategory(Category submittedCategory)
    {
        if (!ModelState.IsValid)
        {
            ViewBag.AllCategorys = _context.Categories.ToList();
            return View("_AddCategory");
        }
        _context.Add(submittedCategory);
        _context.SaveChanges();
        return RedirectToAction("Categories", "Category");
    }

    [HttpGet("categories/{categoryId}")]
    public IActionResult OneCategory(int categoryId)
    {

        List<Product> UnassociatedProducts = _context.Products.ToList();
        Category OneCategory = _context.Categories
                                           .Include(p => p.Associations)
                                           .ThenInclude(ass => ass.Product)
                                           .FirstOrDefault(p => p.CategoryId == categoryId);

        foreach (var association in OneCategory.Associations)
        {
            UnassociatedProducts.Remove(association.Product);
        }

        ViewBag.UnassociatedProducts = UnassociatedProducts;

        return View("_OneCategory", OneCategory);
    }

    [HttpGet("categories/{categoryId}/{productId}")]
    public IActionResult ToggleProductAssociationToCategory(int categoryId, int productId)
    {
        bool AssExists = _context.Associations.Any(a => a.CategoryId == categoryId && a.ProductId == productId);

        if (!AssExists)
        {
            Association ass = new()
            {
                CategoryId = categoryId,
                ProductId = productId
            };
            _context.Associations.Add(ass);
        }
        else
        {
            Association assToDelete = _context.Associations.Where(a => a.CategoryId == categoryId && a.ProductId == productId).FirstOrDefault();
            _context.Associations.Remove(assToDelete);
        }
        _context.SaveChanges();

        return RedirectToAction("OneCategory", "Category", new { categoryId = categoryId });
    }
}