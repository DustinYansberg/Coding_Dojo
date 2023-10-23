

// Create a loop that prints all values from 1-255.
for (int i = 0; i <= 255; i++)
{
    System.Console.WriteLine(i);
}

// WHILE LOOP BONUS
int j = 0;
while (j <= 255)
{
    System.Console.WriteLine(j);
    j++;
}



// Create a new loop that generates 5 random numbers between 10 and 20.
// Modify the previous loop to add the random values together and print 
// the sum after the loop finishes.
Random Rand = new Random();
int RandomSum = 0;
for (int i = 0; i <= 5; i++)
{
    RandomSum += Rand.Next(10, 21);
}
System.Console.WriteLine(RandomSum);
//WHILE LOOP BONUS
int r = 0;
while (r <= 5)
{
    RandomSum += Rand.Next(10, 21);
    r++;
}
System.Console.WriteLine(RandomSum);

// Create a new loop that prints all values from 1 to 100 that are divisible by 3 OR 5, but NOT both.
// Modify the previous loop to print "Fizz" for multiples of 3 and "Buzz" for multiples of 5.
// Modify the previous loop once more to now also print "FizzBuzz" for numbers that are multiples of both 3 and 5.
for (int i = 1; i <= 100; i++)
{
    bool Fizz = i % 3 == 0;
    bool Buzz = i % 5 == 0;

    if (Fizz && Buzz)
    {
        System.Console.WriteLine("FizzBuzz");
    }
    else if (Fizz)
    {
        System.Console.WriteLine("Fizz");
    }
    else if (Buzz)
    {
        System.Console.WriteLine("Buzz");
    }
}
//WHILE LOOP BONUS
int k = 1;
while (k <= 100)
{
    bool Fizz = k % 3 == 0;
    bool Buzz = k % 5 == 0;

    if (Fizz && Buzz)
    {
        System.Console.WriteLine("FizzBuzz");
        // System.Console.WriteLine(k);
    }
    else if (Fizz)
    {
        System.Console.WriteLine("Fizz");
    }
    else if (Buzz)
    {
        System.Console.WriteLine("Buzz");
    }
    k++;
}