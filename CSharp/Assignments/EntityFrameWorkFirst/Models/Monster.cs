#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace EntityFrameWorkFirst.Models;
public class Monster
{
    [Key] //! important this is the unique identifier in MySql
    public int MonsterId { get; set; }
    public string Name { get; set; }
    public int Height { get; set; }
    public string Description { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}

