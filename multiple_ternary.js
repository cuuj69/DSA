// We can chain tenary operators

//if else if, else

function findGreaterOrEqual(a,b){
    if(a === b){
        return 'a and b are equal'
    }
    else if(a > b){
        return 'a is greater'
    }
    else{
        return 'b is greater'
    }
}


//Chaining ternary

function findGreaterOrEqaul(a,b){
    return(a === b)? 'a and b are equal' // return 'a and b are equal if the preceding stament is true
    : (a > b) ? 'a is greater' // else return  'a is greater' if the condition (a > b)
    : 'b is greater' // else return 'b is greater'
}

// It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above

//Using multiple conditional operators without proper identation makes code hard to read

function findGreaterOrEqual(a,b){
    return (a === b)? 'a and b are equal': (a > b) ? 'a is greater' : 'b is greater'
}