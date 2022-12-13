class Validator {
    constructor(){
        this.validations = ['data-required', 'data-checkbox']
        this.errors = 0
    }

    errorValidation(element, message){
        var error = document.createElement("small")
        error.innerHTML = message
        error.classList.add('error')
        element.parentElement.append(error);
        this.errors++
        return error
    }

    succesValidation(element){
        element.classList.add('success')
    }

    validate(inputs){

        let currentErrors = document.querySelectorAll('.error')

        if(currentErrors.length > 0){
            this.cleanErrors(currentErrors)
        }

        inputs.forEach( input => {
            //verifica quais validações existem
            for (let i = 0; this.validations.length > i; i++){
                if(input.getAttribute(this.validations[i]) != null){

                    var method = this.validations[i].replace('data-', '')
                    this[method](input)
                }
            }
        });
    }

    required(input){
        if(input.value == ""){
            return this.errorValidation(input, "Field required")
        }else{
            return this.succesValidation(input)
        
        }
    }


    radio(input){
        console.log('AAAAAAAAAAA')
        if(document.querySelectorAll('input[name=plan-value]:checked') == null){
            console.log('Não selecionou nada')
        }
    }



    cleanErrors(erros){
        erros.forEach(error => error.remove())
        this.errors = 0
    }
}


export { Validator }
