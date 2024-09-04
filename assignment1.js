let a = 12
let b = 3
function calculate(a, b, operation){
    switch(operation){
        case 'add':
            return a+b;
        case "subtraction":
            return a-b
        case 'multiplication':
            return a*b
        case 'division':
            return a/b;
            if (b !==0 ){
                return a/b
            }else{
                return ' error: division by 0'
            }

    }
}
let result=  (calculate)(a,b, "add")
console.log (result)
let result2 =(calculate)(a,b, "subtraction")
console.log(result2)
let result3 =(calculate)(a,b, "multiplication")
console.log(result3)
let result4 =(calculate)(a,b, "division")
console.log(result4)
// another input
let c = 15
let d= 5
function calculate(c, d, operation){
    switch(operation){
        case 'add':
            return c+d;
        case "subtraction":
            return c-d
        case 'multiplication':
            return c*d
        case 'division':
            return c/d;
            if (d !==0 ){
                return c/d
            }else{
                return ' error: division by 0'
            }

    }
}
let result5=  (calculate)(c,d, "add")
console.log (result5)
let result6 =(calculate)(c,d, "subtraction")
console.log(result6)
let result7  =(calculate)(c,d, "multiplication")
console.log(result7)
let result8 =(calculate)(c,d, "division")
console.log(result8)
