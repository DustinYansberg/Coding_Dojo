using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SessionWorkshop.Models;

namespace SessionWorkshop.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IActionResult Index()
    {
        return View("Index");
    }


    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }


    [HttpPost("/user/create")]
    public IActionResult AddUserToSession(string UserName)
    {
        if (UserName != null)
        {
            HttpContext.Session.SetString("UserName", UserName);
            System.Console.WriteLine(HttpContext.Session.GetString("UserName"));
            HttpContext.Session.SetInt32("Number", 22);
            return RedirectToAction("Buttons");
        }
        return RedirectToAction("Index");
    }

    [HttpGet("Buttons")]
    public ViewResult Buttons()
    {
        return View("Buttons");
    }

    [HttpPost("PlusOne")]
    public IActionResult PlusOne()
    {
        int? CheckOldNum = HttpContext.Session.GetInt32("Number");
        if (CheckOldNum != null)
        {
            int OldNum = (int)CheckOldNum;
            OldNum++;
            HttpContext.Session.SetInt32("Number", OldNum);
        }
        return RedirectToAction("Buttons");
    }

    [HttpPost("MinusOne")]
    public IActionResult MinusOne()
    {
        int? CheckOldNum = HttpContext.Session.GetInt32("Number");
        if (CheckOldNum != null)
        {
            int OldNum = (int)CheckOldNum;
            OldNum--;
            HttpContext.Session.SetInt32("Number", OldNum);

        }
        return RedirectToAction("Buttons");
    }

    [HttpPost("MultiplyByTwo")]
    public IActionResult MultiplyByTwo()
    {
        int? CheckOldNum = HttpContext.Session.GetInt32("Number");
        if (CheckOldNum != null)
        {
            int OldNum = (int)CheckOldNum;
            OldNum *= 2;
            HttpContext.Session.SetInt32("Number", OldNum);
        }
        return RedirectToAction("Buttons");
    }

    [HttpPost("RandomPlus")]
    public IActionResult RandomPlus()
    {
        int? CheckOldNum = HttpContext.Session.GetInt32("Number");
        if (CheckOldNum != null)
        {
            int OldNum = (int)CheckOldNum;
            OldNum += new Random().Next(1, 100);
            HttpContext.Session.SetInt32("Number", OldNum);
        }

        return RedirectToAction("Buttons");
    }

    public IActionResult Logout()
    {
        string? Username = HttpContext.Session.GetString("UserName");
        System.Console.WriteLine(Username);
        if (Username != null)
        {
            HttpContext.Session.Remove("UserName");
        }
        return RedirectToAction("Index");
    }
}
