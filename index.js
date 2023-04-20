// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    const hq = 42; // the headquarters is located at block 42
    return Math.abs(blocks - hq); // return the absolute value of the difference between the current block and the headquarters block
  }
  
  function distanceFromHqInFeet(blocks) {
    const blockLength = 264; // assume each block is 264 feet long
    const distanceInFeet = distanceFromHqInBlocks(blocks) * blockLength; // use the distanceFromHqInBlocks function to calculate the distance in blocks, then convert to feet
    return distanceInFeet;
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockLength = 264; // assume each block is 264 feet long
    const distanceInBlocks = Math.abs(startBlock - endBlock); // calculate the distance travelled in blocks
    const distanceInFeet = distanceInBlocks * blockLength; // convert the distance in blocks to feet
    return distanceInFeet;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare = 0;
    
    if (distance <= 400) {
      fare = 0;
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      fare = 25;
    } else if (distance > 2500) {
      return 'cannot travel that far';
    }
    
    return fare;
  }
  