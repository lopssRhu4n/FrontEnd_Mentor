var menu_btn = document.querySelector('#mobile-menu-btn')
var close_btn = document.querySelector('#close-button')
var m_features_button = document.querySelector('#mob-features')
var m_company_button = document.querySelector('#mob-company')


function m_adjust_dropdown(i){
    if (i == 1){
        var dropdown = document.querySelector('#mob-dropdown-1')
    }else if (i == 2){
        var dropdown = document.querySelector('#mob-dropdown-2')
    }

    if (dropdown.classList.contains('invisible')){
        dropdown.classList.remove('invisible')
    }else{
        dropdown.classList.add('invisible')

    }

}

m_features_button.addEventListener('click', () => {
    m_adjust_dropdown(1)
})

m_company_button.addEventListener('click', () =>{
    m_adjust_dropdown(2)
})


menu_btn.addEventListener('click', () =>{   
    
    document.getElementById('mobile-menu').style.display = 'flex'        
    document.getElementById('filter').style.backgroundColor = 'rgba(0, 0, 0, 0.308)'    
})

close_btn.addEventListener('click', () =>{
    
    document.getElementById('mobile-menu').style.display = 'none'
    document.getElementById('filter').style.backgroundColor = 'transparent'
})