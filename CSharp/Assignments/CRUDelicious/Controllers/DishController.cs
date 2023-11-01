using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using CRUDelicious.Models;

namespace CRUDelicious.Controllers;

public class DishController : Controller
{
    private readonly ILogger<DishController> _logger;
    private MyContext _context;

    public DishController(ILogger<DishController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    //C
    [HttpGet("dish/new")]
    public ViewResult DishNew() => View("New");

    [HttpPost("DishCreate")]
    public IActionResult DishCreate(Dish newDish)
    {
        if (!ModelState.IsValid)
        {
            return DishNew();
        }

        // Add Dish to DB
        _context.Add(newDish);
        _context.SaveChanges();


        return RedirectToAction("Index", "Home");
    }

    //R
    [HttpGet("/dish/details/{id}")]
    public ViewResult Details(int id)
    {
        Dish? DetailedDish = _context.Dishes.Where(d => d.DishId == id).FirstOrDefault();
        return View("Details", DetailedDish);
    }

    //U
    [HttpGet("dish/edit/{id}")]
    public IActionResult Edit(int id)
    {
        System.Console.WriteLine(id);
        Dish? DishToEdit = _context.Dishes.Where(d => d.DishId == id).FirstOrDefault();
        if (DishToEdit == null)
        {
            System.Console.WriteLine("FAILED TO ROUTE TO THE RIGHT PLACE !!!!!!!!!!!!!!!!!!!!!!!!!!");
            return RedirectToAction("Details");
        }
        return View("Edit", DishToEdit);
    }

    [HttpPost("dish/update/{id}")]
    public IActionResult Update(Dish UpdatedDish, int id)
    {
        Dish? DishToUpdate = _context.Dishes.FirstOrDefault(d => d.DishId == id);
        if (DishToUpdate == null)
        {
            return RedirectToAction("Index", "Home");
        }

        DishToUpdate.Calories = UpdatedDish.Calories;
        DishToUpdate.Name = UpdatedDish.Name;
        DishToUpdate.Chef = UpdatedDish.Chef;
        DishToUpdate.Tastiness = UpdatedDish.Tastiness;
        DishToUpdate.Description = UpdatedDish.Description;
        DishToUpdate.UpdatedAt = UpdatedDish.UpdatedAt;
        _context.SaveChanges();


        return Redirect($"/dish/details/{id}");

    }

    //D
    [HttpPost("dish/delete/{id}")]
    public IActionResult Delete(int id)
    {
        Dish? DishToDelete = _context.Dishes.SingleOrDefault(d => d.DishId == id);

        _context.Dishes.Remove(DishToDelete);
        _context.SaveChanges();
        return RedirectToAction("Index", "Home");
    }

}
