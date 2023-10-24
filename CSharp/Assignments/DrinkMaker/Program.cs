Console.ForegroundColor = ConsoleColor.Cyan;
Console.WriteLine("OKAY, I RUN NOW. GOOD LUCK EVERYONE ELSE.");
Console.ResetColor();

Soda CokeSoda = new("Coke", "Brown", true, 45, 100);
Wine ThreeStoogesWine = new("Three Stooges", "Brooklyn", 1960);
Coffee Starbucks = new("Starbucks", "string bean", "Dark");

List<Drink> AllBeverages = new()
    {
        CokeSoda,
        ThreeStoogesWine,
        Starbucks
    };

AllBeverages.ForEach(drink => drink.ShowDrink());

// Coffee MyDrink = new Soda("test", "test", true, 10000, 1000000);
// WE GET A CONVERT TYPE ERROR !



