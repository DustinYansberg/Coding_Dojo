public class Magic : Enemy
{
    public static Attack fireball = new Attack("Fireball", 25);
    public static Attack lightning = new Attack("Lightning Bolt", 20);
    public static Attack staffStrike = new Attack("Staff Strike", 10);
    
    public Magic(string name, int health = 80) :
    base(name, health)
    {
        AttackList.Add(fireball);
        AttackList.Add(lightning);
        AttackList.Add(staffStrike);
    }

    public void Heal(Enemy target)
    {
        target._Health += 40;
        Console.WriteLine($"{Name} heals {target.Name} for 40 hp.");
        Console.WriteLine($"{target.Name}'s health is now {target._Health}.");
    }
}