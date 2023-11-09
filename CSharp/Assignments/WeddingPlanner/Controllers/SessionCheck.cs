using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace WeddingPlanner.Controllers;

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