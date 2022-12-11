const steps = document.querySelectorAll('.form-step')
const form = document.querySelector('#main-form')

const switchButton =  document.querySelector('#switch')
const inputDiv = document.querySelector('.input-div')

var timePeriod = 'monthly'

const stepNumbers = document.querySelectorAll('.rounded-number')

var actualStep =  0
var nextStepID = 0

const nextStepButtons = document.querySelectorAll('.next-step')
const goBackButtons = document.querySelectorAll('.go-back')

form.addEventListener('submit', (event) =>{
    event.preventDefault()
})


function errorValidation(element, message){
    error = document.createElement(errorTag)
    error.innerHTML = message
    return element.parentElement.append(error);
}

function succesValidation(element){
    element.parentElement.classList.add('success')
}    


function validate(element){
    if (element.value === ''){
        errorValidation(element, "can't be empty")
        return false
    }else{
        succesValidation(element)
    }
}

function goToNextStep(){
    steps[actualStep].classList.add('invisible')
    nextStepID = actualStep + 1
    steps[nextStepID].classList.remove('invisible')
    actualStep += 1
}

function goToLastStep(){
    steps[actualStep].classList.add('invisible')
    nextStepID = actualStep - 1
    steps[nextStepID].classList.remove('invisible')
    actualStep = nextStepID
}

nextStepButtons.forEach((button) => {
    button.addEventListener('click', (e) =>{
        goToNextStep()
       
    })
    
})

goBackButtons.forEach((button) => {
    button.addEventListener('click', (e) =>{
        goToLastStep()
        
    })
})


switchButton.addEventListener('click', () => {
    var yearlyPlans = document.querySelectorAll('.yearly')
    var monthlyPlans = document.querySelectorAll('.monthly')
    
    if(switchButton.checked){
        timePeriod = 'yearly'
    
        yearlyPlans.forEach((plan) => plan.classList.remove('invisible'))
        monthlyPlans.forEach((plan) => plan.classList.add('invisible'))
    
    }else if(!switchButton.checked){
        timePeriod = 'monthly'

        monthlyPlans.forEach((plan) => plan.classList.remove('invisible'))
        yearlyPlans.forEach((plan) => plan.classList.add('invisible')) 

    }

})

