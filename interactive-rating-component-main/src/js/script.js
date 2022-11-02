var submit_button = document.querySelector('#submit')
var buttons = document.querySelectorAll('.rating-button')
var text_div = document.querySelector('div.text')
var button_list = document.querySelector('ul') 
var image = document.querySelector('img')
var image_container = document.querySelector('div.img-container')
var thanks_div = document.querySelector('div#rating-text')

function check(){
    buttons.forEach((item) => {
        item.addEventListener("click", () =>{
            buttons.forEach((r_button) => {
                r_button.classList.remove('checked')
            })
            item.classList.add('checked')
        })
    })
}

function changeText(){
    text_div.innerHTML =  "<h1>Thank you!</h1><p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>"
}

function changeCSS(){
    button_list.classList.add('invisible')
    submit_button.classList.add('invisible')
    
    image.classList.remove('icon-star')
    image.classList.add('thank-you-img')
    image_container.classList.remove('icon-container')
    image_container.classList.add('thanks-container')
    image.setAttribute('src', '../images/illustration-thank-you.svg')
    
}
check()   

submit_button.addEventListener("click", (e) =>{
    e.preventDefault()
  
    var selected_button = document.querySelector('.checked')
    var button_value = selected_button.value

   
    changeCSS()
    changeText()

    var ratingText = document.createElement('p')
    ratingText.innerText = `You selected ${button_value} out of 5!`

    thanks_div.classList.remove('invisible')
    thanks_div.appendChild(ratingText)

})