#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
namespace ProductsAndCategories.Models;

public class Category
{
    [Key]
    public int CategoryId { get; set; }

    [Required]
    [MinLength(2)]
    [MaxLength(45)]
    public string Name { get; set; }

    public List<Association> Associations { get; set; } = new();

    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}