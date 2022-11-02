var features_button = document.querySelector('#features')
var company_button = document.querySelector('#company')

function adjust_dropdown(i){
    console.log('AAAAAAAA')
    if (i == 1){
        console.log('1 funciona')
        var dropdown = document.querySelector('#dropdown-1')
    }else if (i == 2){
        var dropdown = document.querySelector('#dropdown-2')
    }

    if (dropdown.classList.contains('invisible')){
        dropdown.classList.remove('invisible')
    }else{
        dropdown.classList.add('invisible')

    }

}

features_button.addEventListener('click', () => {
    adjust_dropdown(1)
})

company_button.addEventListener('click', () =>{
    adjust_dropdown(2)
})