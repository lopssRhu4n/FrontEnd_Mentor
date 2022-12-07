var billInput = document.querySelector('#bill-input')
var peopleInput = document.querySelector('#people-input')
var mainForm = document.querySelector('#main-form')
var tipButtons = document.querySelectorAll('.tip-reg-button')
var resetButton = document.querySelector('#reset-button')
var customButton = document.querySelector('#custom-button')

var errorNumber = document.querySelector('#error-number')
var errorBill = document.querySelector('#error-bill')


var resultTip = document.querySelector('#result-tip')
var resultTotal = document.querySelector('#result-total')

var tipPercentage = 0
var numberOfPeople = 1
var tipValue = 0




function changeTipPercentage(button){
    var tip = parseInt(button.value)
    tipPercentage = tip
}


function validate(func){

    if(peopleInput.value == 0){
        errorNumber.classList.add('error-failed')
        errorNumber.innerHTML = "Can't be zero or empty!"
    }else if(billInput.value == 0){
        errorBill.classList.add('error-failed')
        errorBill.innerHTML = "Can't be zero or empty!"
    }else{
        func()
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


mainForm.addEventListener('submit', (event) =>{
    event.preventDefault()
})

resetButton.addEventListener('click', reset)

billInput.addEventListener('input', () => {
    validate(calculateTip)
})

peopleInput.addEventListener('input', () => {
    validate(calculateTip)
})


customButton.addEventListener('input', () =>{
    changeTipPercentage(customButton)
    validate(calculateTip)
})

tipButtons.forEach((element) => {
    element.addEventListener('click', () => {
        changeTipPercentage(element)
        validate(calculateTip())
    })
    
})
