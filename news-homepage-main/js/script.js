var openButton = document.querySelector('#mobile-open-menu')
var closeButton =  document.querySelector('#mobile-close-menu')
var nav = document.querySelector('nav')


openButton.addEventListener('click', () => {
    nav.style.display = 'flex'
    document.getElementById('filter').style.backgroundColor = 'rgba(0, 0, 0, 0.308)'  
    document.getElementById('filter').style.height = '100vh'    

})

closeButton.addEventListener('click', () =>{
    nav.style.display = 'none'
    document.getElementById('filter').style.backgroundColor = 'rgba(0, 0, 0, 0)'    

})