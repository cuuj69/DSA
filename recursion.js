// Recursion is a programming technique where a function calls itself to solve a prolem. It can be useful when you need to solve a problem that can be broken down into smaller, similar sub-problems.

function factorial(n){
    if(n===0){
        return 1;

    }else {
        return n * factorial(n-1)
    }
}

function rangeOfNumbers(startNum, endNum){
    if(endNum < startNum){
        return [];
    }else{
        const number = rangeOfNumbers(startNum, endNum - 1)
        number.push(endNum)
    }
    return number
}

// If 'endNum' is less than 'startNum', the function returns an empty array, because there are no numbers to generate between 'startNum' and 'endNum'

// if 'endNum' is greater than or equal to 'start'Num', the function calls itself recursively with  'startNum' and 'endNum -1'. This generates an array of numbers between 'startNum' and 'endNum - 1'

//The function then appends 'endNum' to the end of the array of number generated in step 2 using the push() method


//