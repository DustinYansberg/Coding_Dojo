public class Melee : Enemy
{
    public static Attack punch = new Attack("Punch", 20);
    public static Attack kick = new Attack("Kick", 15);
    public static Attack tackle = new Attack("Tackle", 25);

    public Melee(string name, int health = 120) :
    base(name, health)
    {
        AttackList.Add(punch);
        AttackList.Add(kick);
        AttackList.Add(tackle);
    }

    public void Rage(Enemy target)
    {
        Random rand = new Random();
        Attack attack = AttackList[rand.Next(0, AttackList.Count)];
        target._Health = target._Health - (attack._DamageAmount + 10);
        Console.WriteLine($"{Name} attacks {target.Name} with {attack._Name}, dealing {attack._DamageAmount + 10} damage.");
        Console.WriteLine($"{target.Name}'s health is now {target._Health}!");
    }
}