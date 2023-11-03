#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace LoginAndRegistration.Models;

public class UserLogin
{
    // No other fields!
    [Required]
    public string LoginEmail { get; set; }
    [Required]
    public string LoginPassword { get; set; }
}
