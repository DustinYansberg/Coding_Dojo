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

    // [HttpPost("user/create")]
    // public IActionResult CreateUser(User newUser)
    // {
    //     if (!ModelState.IsValid)
    //     {
    //         return View("Index");
    //     }
    //     PasswordHasher<User> Hasher = new();
    //     newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
    //     _context.Add(newUser);
    //     _context.SaveChanges();
    //     HttpContext.Session.SetInt32("UUID", newUser.UserId);
    //     return RedirectToAction("Dashboard");
    // }

    // [HttpPost("user/login")]
    // public IActionResult LoginUser(UserLogin userSubmission)
    // {
    //     User? UserInDb = _context.Users.FirstOrDefault(u => u.Email == userSubmission.LoginEmail);

    //     if (UserInDb == null)
    //     {
    //         ModelState.AddModelError("LoginPassword", "Invalid Email/Password (e)");
    //         return View("Index");
    //     }
    //     PasswordHasher<UserLogin> Hasher = new();
    //     var Result = Hasher.VerifyHashedPassword(userSubmission, UserInDb.Password, userSubmission.LoginPassword);

    //     if (Result == 0)
    //     {
    //         ModelState.AddModelError("LoginPassword", "Invalid Email/Password (p)");
    //         return View("Index");
    //     }
    //     HttpContext.Session.SetInt32("UUID", UserInDb.UserId);
    //     return RedirectToAction("Dashboard");
    // }

    // [HttpGet("logout")]
    // public IActionResult Logout()
    // {
    //     HttpContext.Session.Remove("UUID");
    //     // System.Console.WriteLine($"This is what UserId");
    //     return View("Index");
    // }

    // [HttpGet("")]
    // public ViewResult Index()
    // {
    //     int? userCheck = HttpContext.Session.GetInt32("UUID");
    //     if (userCheck != null)
    //     {
    //         return View("Dashboard");
    //     }
    //     return View("Index");
    // }

    // [HttpGet("dashboard")]
    // public ViewResult Dashboard() => View("Dashboard");

}

