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