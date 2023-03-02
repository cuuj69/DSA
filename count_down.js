//In a previous challenge, you learned how to use recursion to replace a for loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with 1 through the number passed to the function

// As mentioned in the previous challenge, there will be a base case. The base case tell the recursive functio when it no longer need to call itself, It is a simple case where the return value is already known. There will also be a recursive call which executes the orginal function with different arguments. If the function is written correctly, eventually the base cases will be reached

//For example, say you want to write a recursive function that returns an array containing the numbers 1 through n. This function will need to accept an argument, n, representing the final number. Then it will need to call itself with progressively smaller values of n until it reaches 1. 

function countup(n){
    if(n < 1){
        return []
    }else{
        const countArray = countup(n - 1);
        countArray.push(n)
        return countArray
    }
}

// The value [1,2,3,4,5] will be displaye in the console

//At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where n is pushed in to the array. countup(n-1) has already been evaluated and returned [1, 2, ......, n-1]

//We have defined a function called countdown with one parameter(n). The function used recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less 1, the unciton should return an empty arry. For example, calling this function with n = 5 should return the array [5,4,3,2,1] Your function  must use recursion by calling itself


//countup
//Headache

function countdown(n){
    if(n < 1){
        return []
    }
    else{
        const countArray = countdown(n-1)
        countArray.unshift(n)
        return countArray
    }
}