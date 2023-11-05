using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.AspNetCore.Mvc.Filters;
using ChefsAndDishes.Models;


namespace LoginAndRegistration.Controllers;

public class DishController : Controller
{
    private readonly ILogger<DishController> _logger;
    private MyContext _context;

    public DishController(ILogger<DishController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("dishes")]
    public IActionResult Dashboard()
    {
        List<Dish> AllDishes = _context.Dishes.ToList();
        return View("_DishTable", AllDishes);
    }

    [HttpGet("dish/form")]
    public IActionResult DishForm()
    {
        ViewBag.ChefList = _context.Chefs.OrderByDescending(c => c.FirstName).ToList();
        return View("_DishForm");
    }


    [HttpPost("dish/add")]
    public IActionResult AddDish(Dish submittedDish)
    {
        if (!ModelState.IsValid)
        {
            ViewBag.ChefList = _context.Chefs.OrderByDescending(c => c.FirstName).ToList();
            return View("_DishForm");
        }
        _context.Add(submittedDish);
        _context.SaveChanges();
        return RedirectToAction("Dashboard", "Dish");
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

