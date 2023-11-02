//hodnota čítače
let counter=0

//hledání prvku html
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const counterValue = document.getElementById('counterValue')

//manipulace s prvky html
counterValue.textContent=counter

plusButton.addEventListener('click',increment)
minusButton.addEventListener('click',decrement)

//obslužná fukce
function increment() {
  counter++ 
  console.log('counter=', counter)
  counterValue.textContent=counter
}

function decrement() {
    counter-- 
    console.log('counter=', counter)
    counterValue.textContent=counter
  }