#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ChefsAndDishes.Models;

public class Dish
{
    [Key]
    public int DishId { get; set; }

    [Required]
    [MinLength(2)]
    [MaxLength(45)]
    public string Name { get; set; }

    [Required]
    [Range(1, 5)]
    public int Tastiness { get; set; }

    [Required]
    [Range(0, int.MaxValue)]
    public int Calories { get; set; }

    [Required]
    public int ChefId { get; set; }

    public Chef? Creator { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}