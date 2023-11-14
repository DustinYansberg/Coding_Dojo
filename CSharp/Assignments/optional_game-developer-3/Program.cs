static bool PlayAgain()
{
    Console.WriteLine("Play again? Y/N");
    string Answer = Console.ReadLine();
    if (Answer == "Y") return true;
    else return false;
}

while (true)
{
    Console.WriteLine("What is your name?");
    string PlayerName = Console.ReadLine();
    Player ThePlayer = new Player(PlayerName);


    Console.WriteLine("Choose an enemy: Mercenary, Archer, or Mage");
        string enemyChoice = Console.ReadLine();
        //* Mercenary combat.
        if (enemyChoice == "Mercenary" || enemyChoice == "mercenary")
        {
            Melee Mercenary = new Melee("Mercenary");
            Console.WriteLine(ThePlayer.PlayerCombat(Mercenary));
            if (!PlayAgain()) return;
        }
        //* Archer combat.
        else if (enemyChoice == "Archer" || enemyChoice == "archer")
        {
            Ranged Archer = new Ranged("Archer");
            Archer.Dash();
            Console.WriteLine(ThePlayer.PlayerCombat(Archer));
            if (!PlayAgain()) return;
        }
        //* Mage combat.
        else if (enemyChoice == "Mage" || enemyChoice == "mage")
        {
            Magic Mage = new Magic("Mage");
            Console.WriteLine(ThePlayer.PlayerCombat(Mage));
            if (!PlayAgain()) return;
        }
}