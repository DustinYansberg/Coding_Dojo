System.Console.ForegroundColor = ConsoleColor.Green;
System.Console.WriteLine("I AM RUN");

Attack Boop = new("Boop", 24);
Attack Derp = new("Derp", -10);
Attack Snore = new("Snore", 10);

Enemy Dustin = new("Dustin", 100, new List<Attack>());

Dustin.AddToAttackList(Snore);
Dustin.AddToAttackList(Boop);
Dustin.AddToAttackList(Derp);


Attack Randy = Dustin.RandomAttack();
System.Console.WriteLine(Randy.Name);