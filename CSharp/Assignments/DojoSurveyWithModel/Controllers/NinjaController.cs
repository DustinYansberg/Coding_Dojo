// This brings all the MVC features we need to this file
using Microsoft.AspNetCore.Mvc;
using DojoSurveyWithModel.Models;
// Be sure to use your own project's namespace here! 
namespace DojoSurveyWithModel.Controllers;
public class NinjaController : Controller   // Remember inheritance?    
{
    [HttpGet] // We will go over this in more detail on the next page    
    [Route("")] // We will go over this in more detail on the next page
    public ViewResult NinjaForm()
    {
        return View();
    }

    [HttpPost("process")]
    public IActionResult Process(Survey Response)
    {
        if (ModelState.IsValid)
        {
            return RedirectToAction("NinjaInfo", Response);
        }
        else
        {
            return View("NinjaForm");
        }
    }

    [HttpGet("NinjaInfo")]
    public ViewResult NinjaInfo(Survey Response)
    {

        return View("NinjaInfo", Response);
    }
}
