public class Player
{
    public static Attack gun = new Attack("Gun", 50);
    
    public string Name;
    int Health;
    public int _Health 
    {
        get {return Health;}
        set {Health = value;}
    }
    List<Attack> AttackList;

    public Player(string name, int health = 100)
    {
        Name = name;
        Health = health;
        AttackList = new List<Attack>();
        AttackList.Add(Melee.punch);
        AttackList.Add(Magic.fireball);
        AttackList.Add(Melee.tackle);
        AttackList.Add(gun);
    }

    public void RandomAttack(Enemy target)
    {
        Random rand = new Random();
        Attack attack = AttackList[rand.Next(0, AttackList.Count)];
        target._Health = target._Health - attack._DamageAmount;
        Console.WriteLine($"{Name} attacks {target.Name} with {attack._Name}, dealing {attack._DamageAmount} damage.");
        Console.WriteLine($"{target.Name}'s health is now {target._Health}!");
    }

    public void PerformAttack(Enemy target, Attack chosenAttack) 
    {
        target._Health = target._Health - chosenAttack._DamageAmount;
        Console.WriteLine($"{Name} attacks {target.Name} with {chosenAttack._Name}, dealing {chosenAttack._DamageAmount} damage.");
        Console.WriteLine($"{target.Name}'s health is now {target._Health}!");
    }

    public string PlayerCombat(Enemy enemy)
    {
        while (Health > 0 && enemy._Health > 0 )
        {
            Console.WriteLine("Choose an attack number:");
            foreach (Attack attack in AttackList)
            {
                Console.WriteLine($"{AttackList.IndexOf(attack)} - {attack._Name}");
            }
            PerformAttack(enemy, AttackList[Int32.Parse(Console.ReadLine())]);
            enemy.RandomAttack(this);
            Console.WriteLine("");
        }
        if (enemy._Health <= 0)
        {
            return "Victory!";
        }
        else
        {
            return "Defeat!";
        }
    }
}