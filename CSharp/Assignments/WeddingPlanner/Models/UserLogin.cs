#pragma warning disable CS8618
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
namespace WeddingPlanner.Models;

public class UserLogin
{
    [Required]
    [Display(Name = "Email")]
    public string LoginEmail { get; set; }

    [Required]
    [Display(Name = "Password")]
    [DataType(DataType.Password)]
    public string LoginPassword { get; set; }
}