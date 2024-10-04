/*
Given a mixed array of number and 
string representations of integers, 
add up the non-string integers and 
subtract the total of the string integers.

Return as a number.
*/


// Solution

function divCon(x){
  let numValue = 0;
  let strValue = 0;
  
  for(let i = 0; i < x.length; i++) {
    if(typeof(x[i]) === 'string' ) {
      strValue += parseFloat(x[i]);
    } else if(typeof(x[i]) === 'number' ) {
      numValue += x[i];
    }
  }
  return numValue - strValue;
}

// or

function divCon(x){
  const strings = x.filter(n => typeof n === 'string')
  const nums = x.filter(n => typeof n === 'number')
  
  const strSum = strings.reduce((acc, str) => acc += +str, 0)
  const numSum = nums.reduce((acc, str) => acc += str, 0)

  return numSum - strSum
}