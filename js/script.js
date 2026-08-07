// Objetos del chat
const chatTrigger = document.querySelector('.chat-trigger')
const helpWindow = document.querySelector('.help-window-1')
const closeBtn = document.querySelector('.chat-close-btn')

chatTrigger.addEventListener('click', function(){
    helpWindow.classList.add('is-active')
    chatTrigger.classList.add('is-hidden')

})

closeBtn.addEventListener('click', function(){
    helpWindow.classList.remove('is-active')
    chatTrigger.classList.remove('is-hidden')
})


