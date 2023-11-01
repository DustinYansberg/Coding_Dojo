#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

namespace CRUDelicious.Models;
public class Dish
{
    [Key] //! important this is the unique identifier in MySql
    public int DishId { get; set; }

    [Required]
    [MinLength(2)]
    [MaxLength(45)]
    public string Name { get; set; }

    [Required]
    [MinLength(2)]
    [MaxLength(45)]
    public string Chef { get; set; }

    [Required]
    [Range(1, 5)]
    public int Tastiness { get; set; }

    [Required]
    [Range(0, int.MaxValue)]
    public int Calories { get; set; }

    [Required]
    public string Description { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}
