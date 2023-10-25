using System.Net.Mail;

public class MeleeFighter : Enemy
{
    // don't need to reinit things that are initialized in Enemy class

    public MeleeFighter(string name) : base(name)
    {
        _Health = 120;
        AttackList = new()
    {
        new ("Punch", 20),
        new("Kick", 15),
        new("Tackle", 25)
    };
    }

    public void Rage(Enemy target)
    {
        Attack RageAttack = RandomAttack();
        RageAttack.DamageAmount += 10;
        System.Console.WriteLine($"{Name} is enraged!");
        PerformAttack(target, RageAttack);
    }
}