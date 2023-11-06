#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
namespace ProductsAndCategories.Models;

public class Product
{
    [Key]
    public int ProductId { get; set; }
    [Required]
    [MinLength(2)]
    [MaxLength(45)]
    public string Name { get; set; }

    [Required]
    [MinLength(10)]
    public string Description { get; set; }

    [Required]
    [Range(0, float.MaxValue)]
    public float Price { get; set; }

    public List<Association> Associations { get; set; } = new();

    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}