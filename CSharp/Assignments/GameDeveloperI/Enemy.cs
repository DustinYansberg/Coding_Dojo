public class Enemy
{
    private string _Name;
    public string Name
    {
        get { return _Name; }
    }
    private int _Health;
    public int Health
    {
        get { return _Health; }
    }
    readonly List<Attack> AttackList;

    public Enemy(string name, int health, List<Attack> attackList)
    {
        _Name = name;
        _Health = health;
        AttackList = attackList;
    }

    public Attack RandomAttack()
    {
        return AttackList.ElementAt(new Random().Next(AttackList.Count));
    }

    public void AddToAttackList(Attack A)
    {
        AttackList.Add(A);
    }

}