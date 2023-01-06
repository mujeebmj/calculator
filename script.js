
let calculator = document.querySelector('.calculator');
let numberButtons = calculator.querySelectorAll('.numberButtons');
let allButtons = calculator.querySelectorAll('#btn');
let equalButton = document.querySelector('.equalButton');
let operandsButtons = document.querySelectorAll('.operandsButtons')
let clear = document.querySelector('.clear')
let del = document.querySelector('.delete')
let mysound = new Audio("sound.mp3");
let previousScreen = document.querySelector('.previous')
let currentScreen = document.querySelector('.current')


let previous = '' ;
let current = '' ;
let operator = '' ;



function addition(a,b){
    return a + b ;
}

function subtract(a,b) {
    return a - b ;
}

function multiply(a,b) {
    return a * b ;
}

function divide(a,b) {
    return a / b ;
}

allButtons.forEach(button =>{
    button.addEventListener('click' , () =>{
        mysound.play()
    })    
})    

clear.addEventListener('click' , ()  =>{
 currentScreen.textContent = '' 
 previousScreen.textContent = ''
})

del.addEventListener('click' , () =>{
    if(previousScreen.textContent == ''){
    currentScreen.textContent = currentScreen.textContent.slice(0 , -1)
    }
    else if(previousScreen != '' && currentScreen != ''){
        currentScreen.textContent = currentScreen.textContent.slice(0 , -1)
    }
    else if (currentScreen == '' && previousScreen != ''){
        previousScreen.textContent = previousScreen.textContent.slice(0 , -1)
    }
})

numberButtons.forEach(button => {
    button.addEventListener('click' , function (e){
        if(currentScreen.textContent.length <= 7){
        currentScreen.textContent += e.target.textContent
        }
    })    
})    

operandsButtons.forEach(operand => {
    operand.addEventListener('click' , function (e){
        if(currentScreen.textContent != ''){
        currentScreen.textContent += e.target.textContent
        previousScreen.textContent = currentScreen.textContent ;
        currentScreen.textContent = ''
        }
        
    })    
})


equalButton.addEventListener('click' , () => {
    if(previousScreen.textContent.includes('+')){
        previousScreen.textContent = previousScreen.textContent.slice(0 , -1)
        current = currentScreen.textContent
        previous = previousScreen.textContent
        current = Number(current)
        previous = Number(previous)
        previous += current
        currentScreen.textContent = previous
        previousScreen.textContent = ''
    }
    else if(previousScreen.textContent.includes('−')){
        previousScreen.textContent = previousScreen.textContent.slice(0 , -1)
        current = currentScreen.textContent
        previous = previousScreen.textContent
        current = Number(current)
        previous = Number(previous)
        previous -= current
        currentScreen.textContent = previous
        previousScreen.textContent = ''
    }
    else if(previousScreen.textContent.includes('×')){
        previousScreen.textContent = previousScreen.textContent.slice(0 , -1)
        current = currentScreen.textContent
        previous = previousScreen.textContent
        current = Number(current)
        previous = Number(previous)
        previous *= current
        currentScreen.textContent = previous
        previousScreen.textContent = ''
    }

    else if(previousScreen.textContent.includes('÷')){
        previousScreen.textContent = previousScreen.textContent.slice(0 , -1)
        current = currentScreen.textContent
        previous = previousScreen.textContent
        current = Number(current)
        previous = Number(previous)
        previous /= current
        currentScreen.textContent = previous
        previousScreen.textContent = ''
    }
})

