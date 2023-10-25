public class Enemy
{
    protected string _Name;
    public string Name
    {
        get { return _Name; }
    }
    protected int _Health;
    public int Health
    {
        get { return _Health; }
        set
        {
            if (_Health + 40 <= 100) // need to have a way to access max health for a class
            {
                _Health = value;
            }
            else
            {
                _Health = 100;
            }
        }
    }
    public List<Attack> AttackList = new();


    public Enemy(string name)
    {
        _Name = name;
        _Health = 100;
    }

    public Attack RandomAttack()
    {
        return AttackList.ElementAt(new Random().Next(AttackList.Count));
    }

    public void AddToAttackList(Attack A)
    {
        AttackList.Add(A);
    }

    // Inside of the Enemy class
    public virtual void PerformAttack(Enemy Target, Attack ChosenAttack)
    {

        // Write some logic here to reduce the Targets health by your Attack's DamageAmount
        Target._Health -= ChosenAttack.DamageAmount;
        Console.WriteLine($"{Name} attacks {Target.Name} with {ChosenAttack.Name}, dealing {ChosenAttack.DamageAmount} damage and reducing {Target.Name}'s health to {Target.Health}!!");
    }



}