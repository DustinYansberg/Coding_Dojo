// Iterate and Print Values
using System.Globalization;

System.Console.WriteLine("Iterate and Print Values:");
static void PrintList(List<string> MyList)
{
    MyList.ForEach(Name => System.Console.WriteLine(Name));
}
List<string> TestStringList = new() { "Harry", "Steve", "Carla", "Jeanne" };
PrintList(TestStringList);


// Print Sum
System.Console.WriteLine("\nPrint Sum:");
static void SumOfNumbers(List<int> IntList)
{
    int Sum = 0;
    IntList.ForEach(num => Sum += num);
    System.Console.WriteLine(Sum);
}
List<int> TestIntList = new() { 2, 7, 12, 9, 3 };
// You should get back 33 in this example
SumOfNumbers(TestIntList);


// Find Max
System.Console.WriteLine("\nFind Max:");
static int FindMax(List<int> IntList)
{
    return IntList.Max();
}
List<int> TestIntList2 = new List<int>() { -9, 12, 10, 3, 17, 5 };
// You should get back 17 in this example
System.Console.WriteLine(FindMax(TestIntList2));


// Square Values
System.Console.WriteLine("\nSquare Values:");
static List<int> SquareValues(List<int> IntList)
{
    for (int i = 0; i < IntList.Count; i++)
    {
        IntList[i] *= IntList[i];
    }
    return IntList;
}
List<int> TestIntList3 = new List<int>() { 1, 2, 3, 4, 5 };
TestIntList3 = SquareValues(TestIntList3);
System.Console.WriteLine(string.Join(",", TestIntList3));

// Replace negative numbers with 0
System.Console.WriteLine("\nReplace negative numbers with 0:");
static int[] NonNegatives(int[] IntArray)
{
    for (int i = 0; i < IntArray.Length; i++)
    {
        if (IntArray[i] > 0)
        {
            continue;
        }
        IntArray[i] = 0;
    }
    return IntArray;
}
int[] TestIntArray = new int[] { -1, 2, 3, -4, 5 };
System.Console.WriteLine(string.Join(",", NonNegatives(TestIntArray)));


// Print Dictionary
System.Console.WriteLine("\nPrint Dictionary:");
static void PrintDictionary(Dictionary<string, string> MyDictionary)
{
    foreach (KeyValuePair<string, string> entry in MyDictionary)
    {
        System.Console.WriteLine($"{entry.Key}: {entry.Value}");
    }
}

Dictionary<string, string> TestDict = new()
{
    { "HeroName", "Iron Man" },
    { "RealName", "Tony Stark" },
    { "Powers", "Money and intelligence" }
};
PrintDictionary(TestDict);

// Find Key
System.Console.WriteLine("\nFind Key:");
static bool FindKey(Dictionary<string, string> MyDictionary, string SearchTerm)
{
    return MyDictionary.ContainsKey(SearchTerm);
}
// Use the TestDict from the earlier example or make your own
// This should print true
Console.WriteLine(FindKey(TestDict, "RealName"));
// This should print false
Console.WriteLine(FindKey(TestDict, "Name"));


// Generate a Dictionary
System.Console.WriteLine("\nGenerate a Dictionary:");
static Dictionary<string, int> GenerateDictionary(List<string> Names, List<int> Numbers)
{
    Dictionary<string, int> ResDict = new();
    int Length = Math.Min(Names.Count, Numbers.Count);
    for (int i = 0; i < Length; i++)
    {
        ResDict.Add(Names[i], Numbers[i]);
    }
    return ResDict;
}
List<string> MyStringTestList = new() { "Julie", "Harold", "James", "Monica" };
List<int> MyIntTestList = new() { 6, 12, 7, 10 };
Dictionary<string, int> MyTestDict = new();
MyTestDict = GenerateDictionary(MyStringTestList, MyIntTestList);

foreach (KeyValuePair<string, int> entry in MyTestDict)
{
    System.Console.WriteLine($"{entry.Key}: {entry.Value}");
}


