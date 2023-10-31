#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace FirstConnectionPractice.Models;
public class Pet
{
    [Key]
    public int PetId { get; set; }

    [Required]
    [MinLength(2)]
    [MaxLength(26)]
    public string Name { get; set; }

    [Required]
    [MinLength(2)]
    [MaxLength(26)]
    public string Type { get; set; }
    [Required]
    public int Age { get; set; }

    [Required]
    public bool HasFur { get; set; }
    public string Description { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}

