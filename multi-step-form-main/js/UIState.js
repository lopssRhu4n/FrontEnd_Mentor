class UIState {
    constructor(validator){
        this.validator = validator

        this.steps = document.querySelectorAll('.form-step')
        this.actualStep = 0
        
        this.planPeriod = 'monthly'
        this.form = document.querySelector('#main-form')
        
        this.switchButton = document.querySelector('#switch')
        

        this.stepInputs = this.steps[this.actualStep].querySelectorAll('input')

        this.nextStepButtons = document.querySelectorAll('.next-step')
        this.goBackButtons = document.querySelectorAll('.go-back')

        

    }



    goToNextStep(){
        this.steps[this.actualStep].classList.add('invisible')
        this.steps[this.actualStep + 1].classList.remove('invisible')
        this.actualStep += 1
        this.stepInputs = this.steps[this.actualStep].querySelectorAll('input')
        console.log(this.stepInputs)
    }

    goToLastStep(){
        this.steps[this.actualStep].classList.add('invisible')
        this.steps[this.actualStep - 1].classList.remove('invisible')
        this.actualStep -= 1
    }

    switchPlanPeriod(){

        var yearlyPlans = document.querySelectorAll('.yearly')
        var monthlyPlans = document.querySelectorAll('.monthly')
    

        if(this.switchButton.checked){
            this.planPeriod = 'yearly'
        
            yearlyPlans.forEach((plan) => plan.classList.remove('invisible'))
            monthlyPlans.forEach((plan) => plan.classList.add('invisible'))
        
        }else if(!this.switchButton.checked){
            this.planPeriod = 'monthly'
    
            monthlyPlans.forEach((plan) => plan.classList.remove('invisible'))
            yearlyPlans.forEach((plan) => plan.classList.add('invisible')) 
    
        }        
    }

    addEvents(){

        this.form.addEventListener('submit', (e) => e.preventDefault())

        this.nextStepButtons.forEach((button) => {
            button.addEventListener('click', () => {
            this.validator.validate(this.stepInputs)
                if (this.validator.errors == 0){
                    this.goToNextStep()
                }
            })
        })


        this.goBackButtons.forEach((button) => {
            button.addEventListener('click', () => {
                this.goToLastStep()
            })
        })


        this.switchButton.addEventListener('click', () => {
            this.switchPlanPeriod()
        })
    }

    

}




import { Validator } from "./formValidation.js"



export { UIState }