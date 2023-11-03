using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.AspNetCore.Mvc.Filters;
using LoginAndRegistration.Models;


namespace LoginAndRegistration.Controllers;

public class UserController : Controller
{
    private readonly ILogger<UserController> _logger;
    private MyContext _context;

    public UserController(ILogger<UserController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpPost("user/create")]
    public IActionResult CreateUser(User newUser)
    {
        if (!ModelState.IsValid)
        {
            return View("Index");
        }
        PasswordHasher<User> Hasher = new();
        newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
        _context.Add(newUser);
        _context.SaveChanges();
        HttpContext.Session.SetInt32("UUID", newUser.UserId);
        return RedirectToAction("Dashboard");
    }

    [HttpPost("user/login")]
    public IActionResult LoginUser(UserLogin userSubmission)
    {
        User? UserInDb = _context.Users.FirstOrDefault(u => u.Email == userSubmission.LoginEmail);

        if (UserInDb == null)
        {
            ModelState.AddModelError("LoginPassword", "Invalid Email/Password (e)");
            return View("Index");
        }
        PasswordHasher<UserLogin> Hasher = new();
        var Result = Hasher.VerifyHashedPassword(userSubmission, UserInDb.Password, userSubmission.LoginPassword);

        if (Result == 0)
        {
            ModelState.AddModelError("LoginPassword", "Invalid Email/Password (p)");
            return View("Index");
        }
        HttpContext.Session.SetInt32("UUID", UserInDb.UserId);
        return RedirectToAction("Dashboard");
    }

    [HttpGet("logout")]
    public IActionResult Logout()
    {
        HttpContext.Session.Remove("UUID");
        // System.Console.WriteLine($"This is what UserId");
        return View("Index");
    }

    [HttpGet("")]
    public ViewResult Index()
    {
        int? userCheck = HttpContext.Session.GetInt32("UUID");
        if (userCheck != null)
        {
            return View("Dashboard");
        }
        return View("Index");
    }


    [SessionCheck]
    [HttpGet("dashboard")]
    public ViewResult Dashboard() => View("Dashboard");

}

// Name this anything you want with the word "Attribute" at the end
public class SessionCheckAttribute : ActionFilterAttribute
{
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        // Find the session, but remember it may be null so we need int?
        int? userId = context.HttpContext.Session.GetInt32("UUID");
        // Check to see if we got back null
        if (userId == null)
        {
            // Redirect to the Index page if there was nothing in session
            // "Index" here is referring to "IndexController", you can use any controller that is appropriate here
            context.Result = new RedirectToActionResult("Index", "User", null);
        }
    }
}

