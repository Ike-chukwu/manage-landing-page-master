const navBtn = document.querySelector('.fa-bars')
const closeBtn = document.querySelector('.fa-close')
const navbar = document.querySelector('nav .overlay .options')
const overlay = document.querySelector('nav .overlay')
const inputField = document.querySelector('.third input')
const goBtn = document.querySelector('.third .label')
const errorMessage = document.querySelector('.third .er')




navBtn.addEventListener('click', function(){
    navBtn.classList.toggle('off')
    navbar.classList.toggle('active')
    closeBtn.classList.toggle('on')
    overlay.classList.toggle('active')
    // heroImg.classList.add('absent')
})

closeBtn.addEventListener('click', function(){
    navBtn.classList.toggle('off')
    navbar.classList.toggle('active')
    closeBtn.classList.toggle('on')
    overlay.classList.toggle('active')
    // heroImg.classList.remove('absent')
})


goBtn.addEventListener('click', function(e){
    e.preventDefault()
    validation(inputField)
})


$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    wrapAround:true,
    freeScroll: true
  });


  function validation(input){
    let value = input.value
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(value.match(pattern)){
        inputField.classList.remove('active')
        input.value = ''
    }
    else{
        inputField.classList.add('active')
        input.value = 'Please insert a valid mail'
    }
}