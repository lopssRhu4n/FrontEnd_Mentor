class priceCalculator {
    constructor(){
        self.planPeriod = ''
        self.totalPrice = 0
        self.selectedPlan = ''
        self.selectedAddons = []
    }

    selectPlan(){
        var plansRadios = document.querySelectorAll('input[type=radio]')
        plansRadios.forEach((radio) => {
            radio.addEventListener('click', () => {
                self.selectedPlan = radio.value
            })
        })    
    }

    selectAddons(){
        var addonsCheckbox = document.querySelectorAll('.addon-checkbox')
        addonsCheckbox.forEach((checkbox) => {
            checkbox.addEventListener('click', () => {
                if(checkbox.checked){
                    self.selectedAddons.push(checkbox.value)
                }else{
                    self.selectedAddons = self.selectedAddons.filter((item) => item != checkbox.value)
                }
                
            })
        })
    }

    calculate(){

    }
}

export { priceCalculator }