// using System.Diagnostics;
// using Microsoft.AspNetCore.Mvc;
// using LoginAndRegistration.Models;

// namespace LoginAndRegistration.Controllers;

// public class HomeController : Controller
// {
//     private readonly ILogger<HomeController> _logger;
//     private MyContext _context;

//     public HomeController(ILogger<HomeController> logger, MyContext context)
//     {
//         _logger = logger;
//         _context = context;
//     }

//     [HttpGet("")]
//     public ViewResult Index() => View("Index");


//     [HttpGet("dashboard")]
//     public ViewResult Dashboard() => View("Dashboard", "Home");

// }
