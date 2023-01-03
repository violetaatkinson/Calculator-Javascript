const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')

let calculation = []
let acumulativeCalculation

function calculate(button) {
    const value = button.textContent
    if (value === 'CLEAR') {
        calculation = []
        screenDisplay.textContent = '.'
    } else if (value === '=') {
        screenDisplay.textContent = eval(acumulativeCalculation)
    } else {
        calculation.push(value)
        acumulativeCalculation = calculation.join('')
        screenDisplay.textContent = acumulativeCalculation
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))