using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Countdown.Models;
using System.Timers;

namespace Countdown.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        DateTime DateAndTime = DateTime.Now;
        string Time = DateAndTime.ToLongTimeString();
        string Date = DateAndTime.ToLongDateString();
        System.Console.WriteLine($"Current Date and Time:\n{Time}");
        System.Console.WriteLine($"{Date}\n");

        DateTime FutureDateAndTime = new DateTime(2025, 10, 1, 8, 30, 59);
        string FutureTime = FutureDateAndTime.ToLongTimeString();
        string FutureDate = FutureDateAndTime.ToLongDateString();
        System.Console.WriteLine($"Future Date and Time:\n{FutureTime}");
        System.Console.WriteLine($"{FutureDate}\n");

        TimeSpan TimeLeft = FutureDateAndTime.Subtract(DateAndTime);
        System.Console.WriteLine(TimeLeft.Days);
        System.Console.WriteLine(TimeLeft.Hours);
        System.Console.WriteLine(TimeLeft.Minutes);
        System.Console.WriteLine(TimeLeft.Seconds);




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
}
