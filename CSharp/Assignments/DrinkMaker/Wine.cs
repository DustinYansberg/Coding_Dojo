using System.Runtime.CompilerServices;

public class Wine : Drink

{
    private string _Region;
    public string Region
    {
        get { return _Region; }
    }

    private int _Year;
    public int Year;

    public Wine(string name, string region, int year) : base(name, "black", 100, false, 0)
    {
        Name = name;
        _Region = region;
        _Year = year;
    }

    public override void ShowDrink()
    {
        base.ShowDrink();
        System.Console.WriteLine($"Region: {_Region}");
        System.Console.WriteLine($"Year: {_Year}");
    }
}