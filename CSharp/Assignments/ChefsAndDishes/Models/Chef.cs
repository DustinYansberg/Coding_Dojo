#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ChefsAndDishes.Models;

public class Chef
{
    [Key]
    public int ChefId { set; get; }

    [Required]
    [MinLength(2)]
    [MaxLength(40)]
    public string FirstName { set; get; }

    [Required]
    [MinLength(2)]
    [MaxLength(40)]
    public string LastName { set; get; }

    [Required]
    [MinimumAge]
    public DateTime DateOfBirth { set; get; }

    public List<Dish> DishesChefMade { get; set; } = new();

    public DateTime CreatedAt { set; get; }
    public DateTime UpdatedAt { set; get; }
}

public class MinimumAgeAttribute : ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        if (value == null)
        {
            return new ValidationResult("A Birthdate is Required");
        }

        TimeSpan TS = DateTime.Now - (DateTime)value;
        int Years = TS.Days / 365;

        if (Years < 18)
        {
            return new ValidationResult("Chef Must be at least 18 years old");
        }
        else
        {
            return ValidationResult.Success;
        }
    }
}
