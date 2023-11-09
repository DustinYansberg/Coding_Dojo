using Microsoft.AspNetCore.Mvc;
using WeddingPlanner.Models;
using Microsoft.EntityFrameworkCore;


namespace WeddingPlanner.Controllers;

[SessionCheck]
public class WeddingController : Controller
{
    private readonly ILogger<WeddingController> _logger;
    private MyContext _context;

    public WeddingController(ILogger<WeddingController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    //C
    [HttpGet("weddings/new")]
    public IActionResult PlanAWedding()
    {
        return View("_PlanAWedding");
    }

    [HttpPost("weddings/create")]
    public IActionResult CreateWedding(Wedding newWedding)
    {
        if (!ModelState.IsValid)
        {
            return View("_PlanAWedding");
        }

        newWedding.Planner = _context.Users.FirstOrDefault(u => u.UserId == (int)HttpContext.Session.GetInt32("UUID"));
        _context.Add(newWedding);
        _context.SaveChanges();
        return RedirectToAction("Dashboard", "User");
    }
    //R
    [HttpGet("weddings/{id}")]
    public IActionResult OneWedding(int id)
    {
        Wedding OneWedding = _context.Weddings
                                     .Include(w => w.Guests)
                                     .ThenInclude(g => g.User)
                                     .FirstOrDefault(w => w.WeddingId == id);
        // System.Console.WriteLine("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
        // System.Console.WriteLine(id);
        // System.Console.WriteLine(OneWedding.WedderOne);
        // System.Console.WriteLine("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
        Console.ResetColor();
        return View("_OneWedding", OneWedding);
    }
    //U
    //D
    [HttpPost("weddings/{weddingId}/delete")]
    public IActionResult DeleteWedding(int weddingId)
    {
        Wedding WeddingToDelete = _context.Weddings.FirstOrDefault(w => w.WeddingId == weddingId);
        _context.Weddings.Remove(WeddingToDelete);
        _context.SaveChanges();
        return RedirectToAction("Dashboard", "User");
    }

}



