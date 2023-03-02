// Use the Conditional (Ternary) Operator

//The conditonal operator,also called the ternary operator, can be used as a one line if-else expression
// The syntax is a ? b : c, where a is the condition, bis the code to run when the condition returns true, and c is the code to run when the condition returns false

//If else comparison

function findGreater(a,b){
    if(a > b){
        return 'a is greater';
    }
    else {
        return 'b is greater or equal'
    }
    
}

//Using the tenary operator

function finGreater(a,b){
    return a > b ? "a is greater": "b is greater or equal"
}