using System.Threading.Tasks.Dataflow;

public class MagicCaster : Enemy
{
    public MagicCaster(string name) : base(name)
    {
        AttackList = new()
        {
            new("Fireball", 20),
            new("Lightning Bolt", 15),
            new("Staff Strike", 15)
        };
        _Health = 80;
    }

    public void Heal(Enemy target)
    {
        target.Health += 40;
        System.Console.WriteLine($"{target.Name}'s health increased to {target.Health}");
    }

}