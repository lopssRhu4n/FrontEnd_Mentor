function errorValidation(element, message){
    var error = document.createElement("small")
    error.innerHTML = message
    error.classList.add('error')
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

export { validate }