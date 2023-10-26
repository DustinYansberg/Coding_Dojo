#pragma warning disable CS8618

// Notice the use of the "Models" tag the same way we put "Controllers" in our Controller file
namespace YourNamespace.Models;
public class Friend
{
    // We must put {get;set;} after all our properties
    // This will give ASP.NET Core the permissions it needs to modify the values    
    public string FirstName { get; set; } = null!; //* "=null!" can be used to get rid of the null warning. 
                                                   //* You only want to use this when you know for a fact 
                                                   //* that the value will not be null. For instance, lets 
                                                   //* say the form where this info will be captured has
                                                   //* First Name required to submit it. That would be a good time to use =null!;
    public string LastName { get; set; }
    public string? Location { get; set; } //? the '?' that follows string allows the this value to be null, 
                                          //? effectively making Location optional.
    public int Age { get; set; }
}
