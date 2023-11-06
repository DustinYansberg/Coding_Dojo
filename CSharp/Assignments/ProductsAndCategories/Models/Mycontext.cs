#pragma warning disable CS8618

using System.Security.Cryptography.X509Certificates;
using Microsoft.EntityFrameworkCore;
using System.Linq;
namespace ProductsAndCategories.Models;

public class MyContext : DbContext
{
    public MyContext(DbContextOptions options) : base(options) { }
    public DbSet<Product> Products { get; set; }
    public DbSet<Association> Associations { get; set; }
    public DbSet<Category> Categories { get; set; }

}