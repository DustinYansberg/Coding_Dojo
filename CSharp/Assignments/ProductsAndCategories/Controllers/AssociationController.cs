using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.AspNetCore.Mvc.Filters;
using ProductsAndCategories.Models;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography.X509Certificates;

namespace ProductsAndCategories.Controllers;

public class AssociationController : Controller
{
    private readonly ILogger<AssociationController> _logger;
    private MyContext _context;

    public AssociationController(ILogger<AssociationController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    // [HttpGet("products/{productId}/{categoryId}")]
    // public IActionResult ToggleCategoryAssociationToProduct(int productId, int categoryId)
    // {
    //     Association ass = new()
    //     {
    //         ProductId = productId,
    //         CategoryId = categoryId
    //     };

    //     _context.Add(ass);
    //     _context.SaveChanges();
    //     // TODO WTF ARE YOU DOING?
    //     return RedirectToAction();
    // }
}