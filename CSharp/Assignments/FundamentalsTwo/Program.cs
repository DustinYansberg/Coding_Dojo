//THREE BASIC ARRAYS

int[] NumArr = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };

string[] StringArr = { "Tim", "Martin", "Nikki", "Sara" };

bool[] BoolArr = new bool[10];
bool swap = true;
for (int i = 0; i < BoolArr.Length; i++)
{
    BoolArr[i] = swap;
    swap = !swap;
}

// LIST OF FLAVORS
List<string> IceCreamFlavors = new List<string>();
IceCreamFlavors.Add("Chocolate");
IceCreamFlavors.Add("Strawberry");
IceCreamFlavors.Add("Vanilla");
IceCreamFlavors.Add("Peanut Butter Cup");
IceCreamFlavors.Add("Half Baked");
IceCreamFlavors.Add("Orange Sherbet");
IceCreamFlavors.Add("Lemon Drop Sorbet");

// USER DICTIONARY
Dictionary<string, string> Users = new Dictionary<string, string>();
foreach (string name in StringArr)
{
    Random Rand = new Random();
    Users.Add(name, IceCreamFlavors[Rand.Next(0, IceCreamFlavors.Count)]);
    // System.Console.WriteLine($"{name}'s favorite ice cream flavor is {Users[name]}");
}

foreach (KeyValuePair<string, string> entry in Users)
{
    System.Console.WriteLine($"{entry.Key}'s favorite ice cream flavor is {entry.Value}");
}
