using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.AspNetCore.Mvc.Filters;
using ChefsAndDishes.Models;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography.X509Certificates;


namespace LoginAndRegistration.Controllers;

public class ChefController : Controller
{
    private readonly ILogger<ChefController> _logger;
    private MyContext _context;

    public ChefController(ILogger<ChefController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("")]
    public IActionResult Dashboard()
    {
        List<Chef> AllChefs = _context.Chefs
                                      .Include(c => c.DishesChefMade)
                                      .ToList();
        // DateTime Now = DateTime.Now;
        // TimeSpan Difference = 
        // System.Console.WriteLine(Now);
        return View("_ChefTable", AllChefs);
    }

    [HttpGet("chef/form")]
    public IActionResult ChefForm()
    {
        return View("_ChefForm");
    }


    [HttpPost("chef/add")]
    public IActionResult AddChef(Chef submittedChef)
    {
        if (!ModelState.IsValid)
        {
            return View("_ChefForm");
        }

        _context.Add(submittedChef);
        _context.SaveChanges();
        return RedirectToAction("Dashboard", "Chef");
    }
}

