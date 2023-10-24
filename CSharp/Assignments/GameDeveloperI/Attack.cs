public class Attack
{
    private string _Name;
    public string Name
    {
        get { return _Name; }
        set { }
    }
    int DamageAmount;

    public Attack(string name, int damageAmount)
    {
        _Name = name;
        DamageAmount = damageAmount;
    }


}