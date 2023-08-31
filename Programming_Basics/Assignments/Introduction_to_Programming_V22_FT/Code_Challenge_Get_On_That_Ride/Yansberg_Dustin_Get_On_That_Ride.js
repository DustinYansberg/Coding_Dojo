// the minimum height in inches and minimum age of a passenger for the ride
const min_height = 42;
const min_age = 10;

// the ride and height of the examined passenger
var rider_height;
var rider_age;

// Stretch Feature 2
// Check to see if the passenger meets either the min_age OR the min_height
if (rider_age >= min_age || rider_height >= min_height){
    //kiddo can ride
    console.log("Get on that ride, kiddo!");
}
else{
    //kiddo cannot ride.
    console.log("Sorry, kiddo, maybe next year.");
}