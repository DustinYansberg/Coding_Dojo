public class Enemy 
{
    public string Name;
    int Health;
    
    public int _Health 
    {
        get {return Health;}
        set {Health = value;}
    }
    protected List<Attack> AttackList;

    public Enemy(string name, int health = 100) 
    {
        Name = name;
        Health = health;
        AttackList = new List<Attack>();
    }

    public void addAttack(Attack attack) 
    {
        AttackList.Add(attack);
    }

    public virtual void RandomAttack(Player target) 
    {
        Random rand = new Random();
        Attack attack = AttackList[rand.Next(0, AttackList.Count)];
        target._Health = target._Health - attack._DamageAmount;
        Console.WriteLine($"{Name} attacks {target.Name} with {attack._Name}, dealing {attack._DamageAmount} damage.");
        Console.WriteLine($"{target.Name}'s health is now {target._Health}!");
    }

    public virtual void PerformAttack(Enemy target, Attack chosenAttack) 
    {
        target._Health = target._Health - chosenAttack._DamageAmount;
        Console.WriteLine($"{Name} attacks {target.Name} with {chosenAttack._Name}, dealing {chosenAttack._DamageAmount} damage.");
        Console.WriteLine($"{target.Name}'s health is now {target._Health}!");
    }
}