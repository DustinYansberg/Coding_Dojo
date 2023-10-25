System.Console.ForegroundColor = ConsoleColor.Green;
System.Console.WriteLine("I AM RUN");

MagicCaster Dustin = new("Dustin");
MeleeFighter Clarissa = new("Clarissa");
RangedFighter Bart = new("Bart");

Clarissa.PerformAttack(Bart, Clarissa.AttackList[1]);
Clarissa.Rage(Dustin);
Bart.PerformAttack(Clarissa, Bart.AttackList[0]);
Bart.Dash();
Bart.PerformAttack(Clarissa, Bart.AttackList[0]);
Dustin.PerformAttack(Clarissa, Dustin.AttackList[0]);
Dustin.Heal(Bart);
Dustin.Heal(Dustin);

