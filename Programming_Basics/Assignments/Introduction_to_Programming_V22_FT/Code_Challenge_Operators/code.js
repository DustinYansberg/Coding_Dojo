
// determine how much cake is remaining after divide the pieces by the number of people
function howMuchLeftOverCake(numberOfPieces, numberOfPeople){
    
    // the cake left over if everyone at the party has exactly one piece of cake.
    // change the operand to % if the party-goers are all gluttons who have a strong sense to keep all things equal
    var remainingCake = numberOfPieces - numberOfPeople

    // generally switch case is easier to read than a series of if-else-if-else-if-else statements
    switch(true){
        case (remainingCake <= 0):
            return "No leftovers for you!"
            // no break; needed because of return statement
        case (remainingCake <= 2):
            return "You have some leftovers"
        case (remainingCake <= 5):
            return "You have leftovers to share"
        case (remainingCake > 5):
            return "Hold another party!"
        default:
            return "The cake is a lie"
    }    
}

console.log(howMuchLeftOverCake(1,3))