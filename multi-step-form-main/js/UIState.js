class UIState {
    constructor(validator, priceCalculator){
        this.validator = validator
        this.calculator = priceCalculator

        this.steps = document.querySelectorAll('.form-step')
        this.actualStep = 0
        
        this.planPeriod = 'monthly'
        this.calculator.planPeriod = this.planPeriod

        this.form = document.querySelector('#main-form')
        
        this.switchButton = document.querySelector('#switch')
        

        this.stepInputs = this.steps[this.actualStep].querySelectorAll('input')

        this.nextStepButtons = document.querySelectorAll('.next-step')
        this.goBackButtons = document.querySelectorAll('.go-back')
        
        
    }



    goToNextStep(){
        this.steps[this.actualStep].classList.add('invisible')
        if(this.actualStep + 1 == 3){
            this.mountResumePage()
        }
        this.steps[this.actualStep + 1].classList.remove('invisible')
        this.actualStep += 1
        this.stepInputs = this.steps[this.actualStep].querySelectorAll('input')

    }

    goToPreviousStep(){
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
        
        this.calculator.planPeriod = this.planPeriod
    }

    mountResumePage(){
        const selectedDiv = document.querySelector('#selected-div')
        const totalDiv = document.querySelector('#total-div')

        selectedDiv.innerHTML = ""
        totalDiv.innerHTML = ""

        var totalPrice = this.calculator.totalPrice
        var selectedPlan = this.calculator.selectedPlan
        var selectedAddons = this.calculator.selectedAddons
        console.log(selectedAddons.length)

        var selectedPlanDiv = document.createElement('div')
        var selectedPlanTitle = document.createElement('p')
        var selectedPlantPrice = document.createElement('p')

        var planPrice = this.calculator.plansPrice[this.planPeriod][selectedPlan]

        selectedPlanTitle.innerText = selectedPlan
        selectedPlantPrice.innerText = planPrice

        selectedPlanDiv.appendChild(selectedPlanTitle)
        selectedPlanDiv.appendChild(selectedPlantPrice)

        selectedPlanDiv.classList.add('selected-plan-div')
        selectedDiv.appendChild(selectedPlanDiv)


        if(selectedAddons.length > 0){
            selectedAddons.forEach((addon) => {
                var addonDiv  = document.createElement('div')
                var addonTitle = document.createElement('small')
                var addonPrice = document.createElement('p')

                var addonPriceValue = this.calculator.addonsPrice[this.planPeriod][addon]

                addonTitle.innerText = addon
                addonPrice.innerText = ` $ ${addonPriceValue}/${this.planPeriod =='monthly'? "mo": "yr"} `

                addonTitle.classList.add('gray')
                addonPrice.classList.add('blue')

                addonDiv.appendChild(addonTitle)
                addonDiv.appendChild(addonPrice)


                addonDiv.classList.add('addon-div-resume')
                selectedDiv.appendChild(addonDiv)

            })
        }


        var totalText = document.createElement('p')
        var textTotalPrice = document.createElement('p')
        
        totalText.innerText = `Total (per ${this.planPeriod == 'monthly'? "month": "year"})`
        textTotalPrice.innerText = `$ ${totalPrice}/${this.planPeriod =='monthly'? "mo": "yr"}`
        textTotalPrice.classList.add('total-price')
        
        totalDiv.appendChild(totalText)
        totalDiv.appendChild(textTotalPrice)

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
                this.goToPreviousStep()
            })
        })


        this.switchButton.addEventListener('click', () => {
            this.switchPlanPeriod()
            this.calculator.calculate()
        })

        this.calculator.selectPlan()
        this.calculator.selectAddons()
    }

    

}







export { UIState }