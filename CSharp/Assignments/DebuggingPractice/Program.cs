// Challenge 1
List<string> Names = new()
{
    "Monica"
};
foreach (string Name in Names)
{
    System.Console.WriteLine(Name);
}

Dictionary<string, int> MyDictionary = new()
{
    { "Hello", 0 },
    { "Hi there", 0 }
};
foreach (KeyValuePair<string, int> entry in MyDictionary)
{
    System.Console.WriteLine($"{entry.Key} {entry.Value}");
}

// This is a tricky one! Hint: look up what a char is in C#
string MyName = "MyName";
System.Console.WriteLine(MyName);

// Challenge 2
List<int> Numbers = new() { 2, 3, 6, 7, 1, 5 };
for (int i = Numbers.Count - 1; i >= 0; i--)
{
    Console.WriteLine(Numbers[i]);
}

// Challenge 3
List<int> MoreNumbers = new() { 12, 7, 10, -3, 9 };
foreach (int Num in MoreNumbers)
{
    Console.WriteLine(Num);
}

// Challenge 4
List<int> EvenMoreNumbers = new() { 3, 6, 9, 12, 14 };
for (int j = 0; j < EvenMoreNumbers.Count; j++)
{
    if (EvenMoreNumbers[j] % 3 == 0)
    {
        EvenMoreNumbers[j] = 0;
    }
}

foreach (int Num in EvenMoreNumbers)
{
    System.Console.WriteLine(Num);
}

// Challenge 5
// What can we learn from this error message?

string MyString = "superduberawesome";
System.Console.WriteLine(MyString);
System.Text.StringBuilder MyStringBuilder = new("superduberawesome");
MyStringBuilder[7] = 'p';
MyString = MyStringBuilder.ToString();
System.Console.WriteLine(MyString);



// ANSWER: Strings are immutable

// Challenge 6
// Hint: some bugs don't come with error messages
Random rand = new Random();
int randomNum = rand.Next(12);
if (randomNum == 12)
{
    Console.WriteLine("Hello");
}