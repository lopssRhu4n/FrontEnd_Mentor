var billInput = document.querySelector('#bill-input')
var peopleInput = document.querySelector('#people-input')
var mainForm = document.querySelector('#main-form')
var tipButtons = document.querySelectorAll('.tip-percentage-button')
var resetButton = document.querySelector('#reset-button')
var errorNumber = document.querySelector('#error-number')

var resultTip = document.querySelector('#result-tip')
var resultTotal = document.querySelector('#result-total')

var tipPercentage = 0
var numberOfPeople = 1
var tipValue = 0



mainForm.addEventListener('submit', (event) =>{
    event.preventDefault()
})

function changeTipPercentage(button){
    var tip = parseInt(button.value)
    tipPercentage = tip
}

tipButtons.forEach((element) =>{
    if(peopleInput.value == 0){
        errorNumber.classList.add('error-failed')
        errorNumber.innerHTML = "Can't be zero or empty!"
    }else{
    errorNumber.classList.remove('error-failed')
    element.addEventListener('click', () => {
        changeTipPercentage(element)
        calculateTip()
    })
    }
    
})


function validate(element){
    if (element.value == 0){
        window.alert('Não pode ser zero!')
    }else if(element.value == null){
        window.alert('Não pode ser nulo!')
    }


}

function calculateTip (){
    var billValue = parseInt(billInput.value)

    tipValue = billValue*tipPercentage/100
    numberOfPeople = peopleInput.value

    var total = billValue + tipValue
    var tipValuePerPerson = tipValue/numberOfPeople
    var totalPerPerson = total/numberOfPeople


    resultTip.innerHTML = `$  ${tipValuePerPerson.toFixed(2)}`
    resultTotal.innerHTML= `$ ${totalPerPerson.toFixed(2)}`

}

function reset(){
    var tipPercentage = 0
    var numberOfPeople = 1
    var tipValue = 0
    
    billInput.value = '00.00'
    peopleInput.value = 1

    resultTip.innerHTML = '$ 00.00'
    resultTotal.innerHTML = '$ 00.00'

}

resetButton.addEventListener('click', reset)
billInput.addEventListener('input', () => {
    if(peopleInput.value == 0){
        errorNumber.classList.add('error-failed')
        errorNumber.innerHTML = "Can't be zero or empty!"
    }else{
    errorNumber.classList.remove('error-failed')
    calculateTip()
    }
})
peopleInput.addEventListener('input', () => {
    if(peopleInput.value == 0){
        errorNumber.classList.add('error-failed')
        errorNumber.innerHTML = "Can't be zero or empty!"
    }else{
    errorNumber.classList.remove('error-failed')
    calculateTip()
    }
})