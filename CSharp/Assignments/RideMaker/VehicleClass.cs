public class Vehicle
{
    string Name;
    int PassengerCapacity;
    string Color;
    bool HasEngine;
    int MilesDriven;

    public Vehicle(string name, int passengerCapacity, string color, bool hasEngine)
    {
        Name = name;
        PassengerCapacity = passengerCapacity;
        Color = color;
        HasEngine = hasEngine;
        MilesDriven = 0;
    }

    public Vehicle(string name, string color)
    {
        Name = name;
        Color = color;
        PassengerCapacity = 5;
        HasEngine = true;
        MilesDriven = 0;
    }

    public void ShowInfo()
    {
        System.Console.WriteLine($"Name: {Name} \nColor: {Color} \nNumber of passengers: {PassengerCapacity} \nHas Engine? {HasEngine} \nMiles Driven: {MilesDriven}");
    }

    public void Travel(int distance)
    {
        MilesDriven += distance;

        System.Console.WriteLine($"Your drove the {Name} for {distance} miles. The {Name} has now driven a total of {MilesDriven}.");
    }
}