/*
Q: How do we know we need a loop here?
A: We want to increment a value and perform an action on every increment of that value

Q: What's the starting point of the loop?
A: 2 miles

Q: When should the loop stop?
A: 6 miles

Q: How will the loop know when to stop?
A: we will tell it to stop if miles are greater than six

Q: What's incrementing for each iteration of the loop?
A: miles. We will increment by two

Q: What variables do we need?
A: Miles. Maybe a constant for the max miles where a reward is given

*/

/*
NINJA BONUS: "Create a new loop where the runner only gets a piece of candy every 2 miles AND if they were going faster than 5.5 miles per hour."

For this alteration, most of the questions and answers from above are the same, only this time we are being asked to 
make sure the runner is maintaining a speed of 5.5 miles per hour in order to receive the candy reward.

Now, there are a lot of ways to approach this, but assuming we will have something in another section of code that will
constantly update the runner's average MPH, we could simply just assign a variable to averageMPH.

*/

// this is the most miles a person can run before we stop giving them candy. It should not change.
const maxMilesForReward = 6;

//miles runner has completed so far
var currMiles = 0;

// variable to assign the speed of the runner. I am assigning a random number between 5 and 6. 
var averageMPH = Math.random() * (6 - 5) + 5;

for(currMiles = 2; currMiles <= maxMilesForReward; currMiles += 2){
    if(averageMPH >= 5.5){
        console.log("Here is your candy reward for running " + currMiles + " miles. You were running " + averageMPH + " miles per hour. Well done!");
    
    }
    else{
        console.log("No candy reward for running " + currMiles + " miles, slow-poke! You were running " + averageMPH + " miles per hour. ")
    }
    // reset the average speed for the next passthrough
    averageMPH = Math.random() * (6 - 5) + 5;    
}

