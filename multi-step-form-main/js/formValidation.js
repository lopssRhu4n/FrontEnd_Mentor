var regularInputs = document.querySelectorAll('.regular-input')

errorTag = "small"



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
        return
    }else{
        succesValidation(element)
    }
}

form.addEventListener('submit', () => {
    regularInputs.forEach((input) => validate(input))
})