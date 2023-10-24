// 1. COIN FLIP
static bool CoinFlip()
{
    return new Random().NextDouble() > 0.5;
}
System.Console.WriteLine(CoinFlip());


// 2. DICE ROLL
static int RollADice(int sides = 6)
{
    return new Random().Next(1, sides + 1);
}
System.Console.WriteLine(RollADice(6));

// 3. Stat Roll
static List<int> StatRoll(int numOfStats = 4)
{
    List<int> res = new();
    int i = 0;
    while (i < numOfStats)
    {
        res.Add(RollADice());
        i++;
    }
    return res;
}

List<int> Stats = StatRoll(4);
Stats.ForEach(stat => System.Console.WriteLine(stat));

//4. Roll until... 
static string RollUntil(int desiredNum, int numOfDiceSides)
{
    int Count = 0;
    while (RollADice(numOfDiceSides) != desiredNum)
    {
        Count++;
    }

    return $"Rolled a {desiredNum} after {Count} rolls.";
}

System.Console.WriteLine(RollUntil(4, 6));

