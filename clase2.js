

function popo(num1, num2, op) {
    switch (op) {
        case "+": console.log(num1 + num2)
        case "-": num1 - num2 
        case "*": num1 * num2
        case "/": return((num2 === 0) ? "error" : num1/num2)
    
        default: "popo";
        
    }
}

console.log(popo(1,0,"/"));
    

