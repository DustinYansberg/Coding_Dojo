using System.Runtime.CompilerServices;

public class Coffee : Drink

{
    private string _BeanType;
    public string BeanType
    {
        get { return _BeanType; }
    }

    //? Cant I use an enum here since I can have only three roast types? 
    //? I feel like string is inefficient.
    private string _Roast;
    public string Roast;

    public Coffee(string name, string beanType, string roast) : base(name, "black", 100, false, 0)
    {
        Name = name;
        _BeanType = beanType;
        _Roast = roast;
    }
    public override void ShowDrink()
    {
        base.ShowDrink();
        System.Console.WriteLine($"Bean Type: {_BeanType}");
        System.Console.WriteLine($"Roast: {_Roast}");
    }
}