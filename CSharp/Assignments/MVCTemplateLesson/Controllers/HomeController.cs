using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MVCTemplateLesson.Models;

namespace MVCTemplateLesson.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    // all our other controller code
    [HttpGet("")]
    public IActionResult Index()
    {
        // ViewBag.MyNum = 9;
        // // The myViewModelNum variable will hold our information for our ViewModel
        // int myViewModelNum = 12;
        // // We then take our myViewModelNum variable (NOT the ViewBag) and pass it into our View
        // return View(myViewModelNum);
        User newUser = new User()
        {
            FirstName = "Nichole",
            LastName = "King"
        };
        return View(newUser);
    }



    public IActionResult Privacy()
    {
        return View();
    }

    [HttpGet("user")]
    public IActionResult AUser()
    {
        User newUser = new User()
        {
            FirstName = "Nichole",
            LastName = "King"
        };
        return View(newUser);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
