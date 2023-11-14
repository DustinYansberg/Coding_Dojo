public class Ranged : Enemy
{
    public Attack shootArrow = new Attack("Shoot an Arrow", 20);
    public Attack throwKnife = new Attack("Throw a knife", 15);
    int Distance;

    public Ranged(string name, int health = 100, int distance = 5) :
    base(name, health)
    {
        Distance = distance;
        AttackList.Add(shootArrow);
        AttackList.Add(throwKnife);
    }

    public void Dash()
    {
        Distance = 20;
        Console.WriteLine("Distance is now 20");
    }

    public override void RandomAttack(Player target)
    {
        if (Distance <= 10) {
            Console.WriteLine($"Attack failed -- {Name} is too close!");
        }
        else {
            base.RandomAttack(target);
        }
    }
    public override void PerformAttack(Enemy target, Attack chosenAttack)
    {
        if (Distance <= 10) {
            Console.WriteLine($"Attack failed -- {Name} is too close!");
        }
        else {
            base.PerformAttack(target, chosenAttack);
        }
    }
}