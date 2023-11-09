using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.AspNetCore.Mvc.Filters;
using WeddingPlanner.Models;
using Microsoft.EntityFrameworkCore;


namespace WeddingPlanner.Controllers;

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
        return View("Index");
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        int? userCheck = HttpContext.Session.GetInt32("UUID");
        if (userCheck != null)
        {
            return RedirectToAction("Dashboard");
        }
        return View("Index");
    }


    [SessionCheck]
    [HttpGet("dashboard")]
    public ViewResult Dashboard()
    {
        List<Wedding> AllWeddings = _context.Weddings.Include(w => w.Guests).ToList();
        return View("_Dashboard", AllWeddings);
    }

    [SessionCheck]
    [HttpGet("weddings/{weddingId}/toggle/{userId}")]
    public IActionResult ToggleRSVP(int weddingId, int userId)
    {
        bool GuestExists = _context.Attendants
                                 .Any(a => a.WeddingId == weddingId && a.UserId == userId);

        if (!GuestExists)
        {
            Attendant guest = new()
            {
                WeddingId = weddingId,
                UserId = userId
            };
            _context.Attendants.Add(guest);
        }
        else
        {
            Attendant? guestToDelete = _context.Attendants
                                               .Where(
                                                      a => a.UserId == userId
                                                      && a.WeddingId == weddingId
                                                     )
                                               .FirstOrDefault();
            _context.Attendants.Remove(guestToDelete);
        }
        _context.SaveChanges();

        return RedirectToAction("Dashboard", "User");
    }

}

