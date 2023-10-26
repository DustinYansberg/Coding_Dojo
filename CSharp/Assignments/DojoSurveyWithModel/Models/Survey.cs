#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace DojoSurveyWithModel.Models;

public class Survey
{
    [Required]
    [MinLength(2, ErrorMessage = "Name must be at least 2 characters long")]
    public string Name { get; set; }

    public string Location { get; set; }

    public string Language { get; set; }

    [MinLength(20, ErrorMessage = "Comments must be a minimum of 20 characters.")]
    public string? Comment { get; set; } //optional
}