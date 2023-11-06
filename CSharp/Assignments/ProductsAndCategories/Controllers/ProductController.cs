using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.AspNetCore.Mvc.Filters;
using ProductsAndCategories.Models;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography.X509Certificates;
using System.Net.Http.Headers;

namespace ProductsAndCategories.Controllers;

public class ProductController : Controller
{
    private readonly ILogger<ProductController> _logger;
    private MyContext _context;

    public ProductController(ILogger<ProductController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("")]
    public IActionResult AddProduct()
    {
        ViewBag.AllProducts = _context.Products.ToList();
        return View("_AddProduct");
    }

    [HttpPost("products/create")]
    public IActionResult CreateProduct(Product submittedProduct)
    {
        if (!ModelState.IsValid)
        {
            ViewBag.AllProducts = _context.Products.ToList();
            return View("_AddProduct");
        }
        _context.Add(submittedProduct);
        _context.SaveChanges();
        return RedirectToAction("AddProduct", "Product");
    }

    // TODO Copy this stuff to category controller and swap category with product and vice versa 
    [HttpGet("products/{productId}")]
    public IActionResult OneProduct(int productId)
    {

        List<Category> UnassociatedCategories = _context.Categories.ToList();
        Product OneProduct = _context.Products
                                           .Include(p => p.Associations)
                                           .ThenInclude(ass => ass.Category)
                                           .FirstOrDefault(p => p.ProductId == productId);

        foreach (var association in OneProduct.Associations)
        {
            UnassociatedCategories.Remove(association.Category);
        }

        ViewBag.UnassociatedCategories = UnassociatedCategories;

        return View("_OneProduct", OneProduct);
    }

    [HttpGet("products/{productId}/{categoryId}")]
    public IActionResult ToggleCategoryAssociationToProduct(int productId, int categoryId)
    {
        bool AssExists = _context.Associations.Any(a => a.ProductId == productId && a.CategoryId == categoryId);

        if (!AssExists)
        {
            Association ass = new()
            {
                ProductId = productId,
                CategoryId = categoryId
            };
            _context.Associations.Add(ass);
        }
        else
        {
            Association assToDelete = _context.Associations.Where(a => a.CategoryId == categoryId && a.ProductId == productId).FirstOrDefault();
            _context.Associations.Remove(assToDelete);
        }
        _context.SaveChanges();

        return RedirectToAction("OneProduct", "Product", new { productId = productId });
    }
}