class priceCalculator {
    constructor(){
        this.planPeriod = ''
        this.totalPrice = 0
        this.selectedPlan = ''
        this.selectedAddons = []

        this.plansPrice = {
            yearly: {
                arcade: 90,
                advanced: 120,
                pro: 150
            },
            monthly: {
                arcade: 9,
                advanced: 12,
                pro: 15
            }
        }


        this.addonsPrice = {
            yearly: {
                online_service: 10,
                larger_storage: 20,
                customizable_profile: 20, 
            },
            monthly: {
                online_service: 1,
                larger_storage: 2,
                customizable_profile: 2,
            }
        }

    }

    selectPlan(){
        var plansRadios = document.querySelectorAll('input[type=radio]')
        plansRadios.forEach((radio) => {
            radio.addEventListener('click', () => {
                this.selectedPlan = radio.value
                this.calculate()
            })
        })    
    }

    selectAddons(){
        var addonsCheckbox = document.querySelectorAll('.addon-checkbox')
        addonsCheckbox.forEach((checkbox) => {
            checkbox.addEventListener('click', () => {
                if(checkbox.checked){
                    this.selectedAddons.push(checkbox.value)
                }else{
                    this.selectedAddons = this.selectedAddons.filter((item) => item != checkbox.value)
                }
                this.calculate()
            })
        })
    }

    calculate(){
        this.totalPrice = this.plansPrice[this.planPeriod][this.selectedPlan]

        if(this.selectedAddons.length > 0){
            this.selectedAddons.forEach((addon) => {
                this.totalPrice += this.addonsPrice[this.planPeriod][addon]
            })
        }
    }
}

export { priceCalculator }