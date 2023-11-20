/*
Problem from Amazon:
You are stranded in a post-apocalyptic desert with a motorbike. Starting with a full tank of gas, 
you are trying to cross the desert to reach your destination.
There are several outposts scattered throughout the desert where you can fill up on gas, 
but as they are dangerous, you want to minimize the number of stops you need to make.

Given a tank size, a list of gas station locations (as a 2D array of xy coordinates) , 
a start location, and a target destination,
return the fewest number of outposts that need to be visited (shortest path) to reach your destination.

NOTES: 
- we aren't looking for the shortest path in terms of *distance*, 
just in terms of the number of locations visited!
- tank size is guaranteed to be greater than 0 (but not guaranteed to be big enough to reach any locations)
- tank size is in units of distance (so a tank size of 1 means you can travel 1 unit of distance)
- you are not limited to moving in just the cardinal directions, 
you can move at any angle as long as you have enough gas (Hint: think distance formula)
- you should be using a queue as part of your algorithm! 
think back to the toArrLevelOrder algorithm we did in week 2 with BSTs, we need to do something similar (but without a BST)
*/
// returns an count of outposts required
function find_fewest_outposts_count(start, target, outposts, tankSize) {
  let count = 0;
  let visitedNodes = { start: 1 };
  for (const outpost of outposts) {
    visitedNodes[outpost] = 0;
  }

  const nodeDistanceToTarget = [];

  for (let i = 0; i < outposts.length; i++) {
    nodeDistanceToTarget.push(
      Math.sqrt(
        (outposts[i][0] - target[0]) ** 2 + (outposts[i][1] - target[1]) ** 2
      )
    );
  }
  console.log(outposts);
  console.log(nodeDistanceToTarget);

  let currNode = start;
  while (currNode != target) {
    // while currnode is not target
    // check if currnode's distance to target is less than tank size, if it is, then return the current count
    // then find distance from current node to all other nodes
    const distanceToTarget = Math.sqrt(
      (currNode[0] - target[0]) ** 2 + (currNode[1] - target[1]) ** 2
    );
    if (distanceToTarget < tankSize) {
      return count;
    }
    return count;
  }
}
// returns a 2d array representing the path from start to target
function find_fewest_outposts_path(start, target, outposts, tankSize) {}

const outposts = [
  [0, 1],
  [0, 3],
  [1, 2],
];
console.log(find_fewest_outposts_count([0, 0], [0, 4], outposts, 2.5)); // 1
// console.log(find_fewest_outposts_path([0, 0], [0, 4], outposts, 2.5)); // [ [ 0, 0 ], [ 1, 2 ], [ 0, 4 ] ]

const outposts4 = [
  [0, 1],
  [0, 3],
  [1, 2],
];
console.log(find_fewest_outposts_count([0, 0], [0, 4], outposts4, 2)); // 2
// console.log(find_fewest_outposts_path([0, 0], [0, 4], outposts4, 2)); // [ [ 0, 0 ], [ 0, 1 ], [ 0, 3 ], [ 0, 4 ] ]
