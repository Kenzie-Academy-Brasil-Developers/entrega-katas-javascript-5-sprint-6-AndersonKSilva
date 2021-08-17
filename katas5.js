// Kata 01 reverseString
function testeReverseString1() {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeReverseString1()
 
function testeReverseString2() {
    let result = reverseString("Full Stack");
    let expected = "kcatS lluF";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeReverseString2

function reverseString(str){
    return str.split("").reverse().join("")
}

//  Kata 02 reverseSentence

function testReverseSentence1() {
    let result = reverseSentence("Kenzie Academy");
    let expected = "Academy Kenzie";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testReverseSentence1()

function testReverseSentence2() {
    let result = reverseSentence("Full Stack");
    let expected = "Stack Full";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testReverseSentence2()

function reverseSentence(str){
    return str.split(" ").reverse().join(" ")
}

// Kata 3 minimumValue

function testMinimumValue1(){
    let result = minimumValue([1,3,9,2,0,4,2,5,4,8])
    let expected = 0
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMinimumValue1()

function testMinimumValue2(){
    let result = minimumValue([-6,9,-3,-5,2,8,-1,3,-2,])
    let expected = -6
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMinimumValue2()

function minimumValue(arr){
    return Math.min.apply(null, arr)
}

// Kata 4 maximumValue

function testMaximumValue1(){
    let result = maximumValue([1,3,9,2,0,4,2,5,4,8])
    let expected = 9
    console.assert(result === expected, `esperado: ${expected}, obitido: ${result}`)
}
testMaximumValue1()

function testMaximumValue2(){
    let result = maximumValue([-6,4,-3,-5,2,8,-1,3,-2])
    let expected = 8
    console.assert(result === expected, `esperado: ${expected}, obitido: ${result}`)
}
testMaximumValue2()

function maximumValue(arr){
    return Math.max.apply(null, arr)
}

// Kata 5 calculateRemainder

function testCalculateRemainder1(){
    let result = calculateRemainder(8,2)
    let expected = 0
    console.assert(result === expected, `esperado: ${expected}, obitido: ${result}`)
}
testCalculateRemainder1()

function testCalculateRemainder2(){
    let result = calculateRemainder(7,3)
    let expected = 1
    console.assert(result === expected, `esperado: ${expected}, obitido: ${result}`)
}
testCalculateRemainder2()

function calculateRemainder(a,b){
    return a % b
}

// Kata 6 distinctValues

function testDistinctValues1(){
    let result = distinctValues("1 3 5 3 7 3 1 1 5")
    let expected = "1 3 5 7"
    console.assert(result === expected, `esperado: ${expected}, obitido: ${result}`)
}
testDistinctValues1()

function testDistinctValues2(){
    let result = distinctValues("1 a 5 2 a 2 b 1 5")
    let expected = "1 a 5 2 b"
    console.assert(result === expected, `esperado: ${expected}, obitido: ${result}`)
}
testDistinctValues2()

function distinctValues(str){
    return [...new Set(str.split(" "))].join(" ")
}

// Kata 7 countValues

function testCountValues1(){
    let result = countValues("1 3 5 3 7 3 1 1 5")
    let expected = "1(3) 3(3) 5(2) 7(1)"
    console.assert(result === expected, `esperado: ${expected}, obitido: ${result}`)
}
testCountValues1()

function testCountValues2(){
    let result = countValues("1 a 5 2 a 2 b 1 5")
    let expected = "1(2) a(2) 5(2) 2(2) b(1)"
    console.assert(result === expected, `esperado: ${expected}, obitido: ${result}`)
}
testCountValues2()

function countValues(str){
    let valores = [...new Set(str.split(" "))]
    let contador = 0
    let resultado = []
    for(let i = 0; i<valores.length;i++){
        for(let j =0;j<str.length;j++){
            if(valores[i]===str[j]){
                contador++
            }
        }
        resultado.push(`${valores[i]}(${contador})`)
        contador=0
    }
    return resultado.join(" ")
}

// Kata 8 evaluateExpression

function testEvaluateExpression1() {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testEvaluateExpression1()

function testEvaluateExpression2() {
    let result = evaluateExpression("a - b - c + d", {a: 7, b: 2, c: 3, d: 14});
    let expected = 16
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testEvaluateExpression2()

function evaluateExpression(str, obj){
    let newstr=str.split(" ")
    let primeiro = obj.a
    for (let i = 0; i < newstr.length; i++) {
        if (newstr[i] === "-") {
            primeiro-=(obj[newstr[i+1]])
        }
        if (newstr[i] === "+") {
            primeiro+=(obj[newstr[i+1]])
        }
    }
    return primeiro
}