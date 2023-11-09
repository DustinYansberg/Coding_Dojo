#pragma warning disable CS8618

using System.ComponentModel.DataAnnotations;
namespace WeddingPlanner.Models;

public class Wedding
{
    [Key]
    public int WeddingId { get; set; }

    [Required]
    public string WedderOne { get; set; }
    [Required]
    public string WedderTwo { get; set; }
    public string Address { get; set; }
    public DateTime WeddingDate { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;


    //? fk
    public int UserId { get; set; }


    //? nav items
    public User? Planner { get; set; }
    public List<Attendant> Guests { get; set; } = new();
}