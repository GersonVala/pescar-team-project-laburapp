// Objetos del chat
const chatTrigger = document.querySelector('.chat-trigger')
const helpWindow = document.querySelector('.help-window-1')
const closeBtn = document.querySelector('.chat-close-btn')

//Ventanas del chat

const Wx = document.querySelector('#Wx')
const W1x = document.querySelector('#W1-x')
const W11x = document.querySelector('#W1-1-x')
const W13x = document.querySelector('#W1-3-x')
const W2x = document.querySelector('#W2-x')
const W3x = document.querySelector('#W3-x')

chatTrigger.addEventListener('click', function(){
    helpWindow.classList.add('is-active')
    chatTrigger.classList.add('is-hidden')

})

closeBtn.addEventListener('click', function(){
    helpWindow.classList.remove('is-active')
    chatTrigger.classList.remove('is-hidden')
})


