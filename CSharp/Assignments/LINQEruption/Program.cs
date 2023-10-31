using System.Linq;
using System.Security.Cryptography.X509Certificates;

List<Eruption> eruptions = new List<Eruption>()
{
    new Eruption("La Palma", 2021, "Canary Is", 2426, "Stratovolcano"),
    new Eruption("Villarrica", 1963, "Chile", 2847, "Stratovolcano"),
    new Eruption("Chaiten", 2008, "Chile", 1122, "Caldera"),
    new Eruption("Kilauea", 2018, "Hawaiian Is", 1122, "Shield Volcano"),
    new Eruption("Hekla", 1206, "Iceland", 1490, "Stratovolcano"),
    new Eruption("Taupo", 1910, "New Zealand", 760, "Caldera"),
    new Eruption("Lengai, Ol Doinyo", 1927, "Tanzania", 2962, "Stratovolcano"),
    new Eruption("Santorini", 46, "Greece", 367, "Shield Volcano"),
    new Eruption("Katla", 950, "Iceland", 1490, "Subglacial Volcano"),
    new Eruption("Aira", 766, "Japan", 1117, "Stratovolcano"),
    new Eruption("Ceboruco", 930, "Mexico", 2280, "Stratovolcano"),
    new Eruption("Etna", 1329, "Italy", 3320, "Stratovolcano"),
    new Eruption("Bardarbunga", 1477, "Iceland", 2000, "Stratovolcano")
};
// Example Query - Prints all Stratovolcano eruptions
IEnumerable<Eruption> stratovolcanoEruptions = eruptions.Where(c => c.Type == "Stratovolcano");
// PrintEach(stratovolcanoEruptions, "Stratovolcano eruptions.");
// Execute Assignment Tasks here!

// Helper method to print each item in a List or IEnumerable. This should remain at the bottom of your class!
static void PrintEach(IEnumerable<Eruption> items, string msg = "")
{
    Console.WriteLine("\n" + msg);
    foreach (Eruption item in items)
    {
        Console.WriteLine(item.ToString());
    }
}


//? Function that takes in a location as a String and prints the first eruption for that location, or prints No location Eruption Found
void PrintFirstEruption(string location)
{
    List<Eruption> FilteredEruptions = eruptions.Where(eruption => eruption.Location == location).ToList();

    if (FilteredEruptions.Count > 0)
    {
        System.Console.WriteLine(FilteredEruptions.OrderBy(eruption => eruption.Year).First().ToString());
    }
    else
    {
        System.Console.WriteLine($"No {location} Eruption found.");
    }
}

//? find first eruption in chile and print it
//? find first eruption in Hawaiian Is and print it
//? find first eruption in Grenland and print it (if it exists (... it doesn't))
PrintFirstEruption("Chile");
PrintFirstEruption("Hawaiian Is");
PrintFirstEruption("Greenland");

//? find the first eruption that is after the year 1900 AND in New Zealand
Eruption NzEruption = eruptions
                        .Where(e => e.Location == "New Zealand")
                        .Where(e => e.Year >= 1900)
                        .First();
System.Console.WriteLine(NzEruption.ToString());

//? Find all eruptions of volcanoes with an elevation greater than 2000 m and print them
PrintEach(eruptions.Where(eruption => eruption.ElevationInMeters > 2000).ToList());

//? Find all eruptions where the volcano's name starts with "L" and print them. Also print the number of eruptions found.
List<Eruption> EruptionsWhoseVolcanosNameStartsWithL =
        eruptions.Where(eruption => eruption.Volcano.StartsWith("L")).ToList();
PrintEach(EruptionsWhoseVolcanosNameStartsWithL);
System.Console.WriteLine($"Number of Eruptions whose volcano's name begins with the letter L: {EruptionsWhoseVolcanosNameStartsWithL.Count}");

//? Find the highest elevation, and print only that integer (Hint: Look up how to use LINQ to find the max!)
System.Console.WriteLine
(
    eruptions.Max(e => e.ElevationInMeters)
);

//? Use the highest elevation variable to find and print the name of the Volcano with that elevation.
System.Console.WriteLine
(
    eruptions
    .First
    (
        e => e.ElevationInMeters
             == eruptions.Max(e => e.ElevationInMeters)
    ).Volcano
);

//? Print all Volcano names alphabetically
foreach (Eruption e in eruptions.OrderBy(eruption => eruption.Volcano))
{
    System.Console.WriteLine(e.Volcano);
}

//? Print the sum of all the elevations of the volcanoes combined.
System.Console.WriteLine(eruptions.Sum(e => e.ElevationInMeters));

//? Print whether any volcanoes erupted in the year 2000 (Hint: look up the Any query)
System.Console.WriteLine(eruptions.Any(e => e.Year == 2000));

//? Find all stratovolcanoes and print just the first three (Hint: look up Take)
PrintEach(stratovolcanoEruptions.Take(3));

//? Print all the eruptions that happened before the year 1000 CE alphabetically according to Volcano name.
PrintEach
(
    eruptions.Where(e => e.Year <= 1000).OrderBy(e => e.Volcano)
);

//? Redo the last query, but this time use LINQ to only select the volcano's name so that only the names are printed.
foreach (Eruption e in eruptions.Where(e => e.Year <= 1000).OrderBy(e => e.Volcano))
{
    System.Console.WriteLine(e.Volcano);
}