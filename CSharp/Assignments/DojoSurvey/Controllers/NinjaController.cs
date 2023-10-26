// This brings all the MVC features we need to this file
using Microsoft.AspNetCore.Mvc;
// Be sure to use your own project's namespace here! 
namespace YourNamespace.Controllers;
public class NinjaController : Controller   // Remember inheritance?    
{
    [HttpGet] // We will go over this in more detail on the next page    
    [Route("")] // We will go over this in more detail on the next page
    public ViewResult NinjaForm()
    {
        return View();
    }

    [HttpPost("process")]
    public RedirectToActionResult Process(string Name, string Location, string Language, string Comment)
    {
        System.Console.WriteLine(Name);
        System.Console.WriteLine(Location);
        System.Console.WriteLine(Language);
        System.Console.WriteLine(Comment);

        //! This works for when we return a view, but it doesnt work for a redirect
        //? I think I need to use something like Session, but I can't quite figure it out.
        ViewBag.Name = Name;
        ViewBag.Location = Location;
        ViewBag.Language = Language;
        ViewBag.Comment = Comment;

        return RedirectToAction("NinjaInfo");
    }

    [HttpGet("NinjaInfo")]
    public ViewResult NinjaInfo()
    {
        return View();
    }
}
