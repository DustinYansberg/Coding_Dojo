using System.Threading.Tasks.Dataflow;

public class RangedFighter : Enemy
{
    protected int _Distance;
    public int Distance
    {
        get { return _Distance; }
    }
    public RangedFighter(string name) : base(name)
    {
        _Distance = 5;
        AttackList = new()
        {
            new("Shoot an Arrow", 20),
            new("Throw a knife", 15)
        };
    }
    public void Dash()
    {
        _Distance += 10;
        System.Console.ForegroundColor = ConsoleColor.Gray;
        System.Console.WriteLine($"{Name} dashes to increase distance to target.");
        System.Console.ForegroundColor = ConsoleColor.Green;
    }

    public override void PerformAttack(Enemy Target, Attack ChosenAttack)
    {
        if (_Distance > 10)
        {
            base.PerformAttack(Target, ChosenAttack);
        }
        else
        {
            System.Console.ForegroundColor = ConsoleColor.Red;
            System.Console.WriteLine($"{Name} tried to attack {Target.Name} but they are too close to the target.");
            System.Console.ForegroundColor = ConsoleColor.Green;
        }
    }
}