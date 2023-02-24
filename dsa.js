/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

// function utopianTree(n) {
//     // Write your code here
//     let spring = 2;
//     let summer = 1;
//     let height = 1;
//     let cycle = n;
//     if(n < 1){
//         return 1;
//     }
//     else{        
//         while(cycle !== 0){
//             height *= spring;
//             cycle -=1;
//             if(cycle < 1){
//                 break;
//             }
//             height += summer
//             cycle -=1  
//         }       
//     } 
//     return height;
// }

// A man spent 1/4 of his monthly salaray on food , 1/3 of the remaining on transport and 1/8 of what still reamained on rent. If he has 140 left, calculate
// monthly salary
//amount spent on food and rent

// function test(){
//     let remainder = 140 // 
    
//     let food = (1/4)
//     let rent = (1/3)
//     let transport = (1/8)
//     // console.log(rent)

//     let monthly_salary = 1
    

//     let get_monthly_salary = food + rent + transport 
    
//     // console.log(get_monthly_salary)

//     let remainder_fraction =  1 - get_monthly_salary

//     // console.log(remainder_fraction)

//     result = get_monthly_salary + remainder_fraction
    
//     let final_monthly_salary = result * remainder / remainder_fraction

//     console.log((final_monthly_salary - remainder) )


    



// }

// (test())


// function findDigits(n) {
//     // Write your code here
//     let accum = []
//     let count = 0;
//     let length = n.toString().length;
    
//     for(let i = 0; i < length; i++){
//         let getDigits = n.toString().charAt(i)
//         accum.push(parseInt(getDigits))
//     }

//     for(let j = 0;  j <accum.length; j++ ){
//         if(n%accum[j]==0){
//             count +=1;
//         }
//     }
//     return count
// }

// console.log(findDigits(1012))

//This is the solution to the integer squares

// I think they picked a cue from the keyword lower and upper boundary


// Sherlock and Squares
// function squares(a,b){
//     //We need the smallest perfect square integer and largest perfect square integer in range
//     start = Math.ceil(Math.sqrt(a))

//     end = Math.floor(Math.sqrt(b))
//     let count = 0;

//     for(let i = start; i<= end; i++){
//         //It has to be in range
//         let square =  i*i
//         if(square >=a && square <=b){
//             count += 1
//         }
//     }
//     return count
// }

// console.log(squares(3,9))

//Preamble
// Counting Cards
// In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

// Count Change	Cards
// +1	2, 3, 4, 5, 6
// 0	7, 8, 9
// -1	10, 'J', 'Q', 'K', 'A'

//Instructions
// You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

// Example Outputs: -3 Hold or 5 Bet

// Hint
// Do NOT reset count to 0 when value is 7, 8, or 9.
// Do NOT return an array.
// Do NOT include quotes (single or double) in the output.

//Solution
let count = 0;

function cc(card) {
  // Only change code below this line
switch(card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count +=1;
  break
  case 7:
  case 8:
  case 9:
  count += 0;
  break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
  count -= 1;
}

  if(count > 0){
    return `${count} Bet`
  }
  else if(count < 1){
    return `${count} Hold`
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

//Preamble  Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".

// checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") should return the string pony.

// Passed:checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") should return the string kitten.
// Passed:checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") should return the string Not Found.
// Passed:checkObj({city: "Seattle"}, "city") should return the string Seattle.
// Passed:checkObj({city: "Seattle"}, "district") should return the string Not Found.
// Passed:checkObj({pet: "kitten", bed: "sleigh"}, "gift") should return the string Not Found.

function checkObj(obj, checkProp) {
  // Only change code below this line

  return obj[checkProp] || 'Not Found'
  

 
  // Only change code above this line
}


