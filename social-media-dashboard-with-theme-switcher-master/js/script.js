var toggle = document.querySelector('#dark-mode-check')
var html = document.querySelector('html')

console.log(toggle)

toggle.addEventListener('click', () =>{
    if(!toggle.checked){
        html.classList.add('dark-mode')        
    }else{
        html.classList.remove('dark-mode')
    }
    
})