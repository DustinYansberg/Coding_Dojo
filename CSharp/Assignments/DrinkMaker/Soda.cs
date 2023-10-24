public class Soda : Drink
{
    private bool _Diet;
    public bool Diet
    {
        get { return _Diet; }
    }
    public Soda(string name, string color, bool diet, double temp, int calories) : base(name, color, temp, true, calories)
    {
        _Diet = diet;
        if (_Diet)
        {
            Calories = 0;
        }

    }

    public override void ShowDrink()
    {
        base.ShowDrink();
        System.Console.WriteLine($"Diet: {_Diet}");
    }
}