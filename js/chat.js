const chatMessages = document.querySelector("#chat-messages")
const chatForm = document.querySelector("#chat-form")
const chatInput = document.querySelector("#chat-input")

// Funciones para mostrar los mensajes enviados en el chat

chatForm.addEventListener('submit', function(e){

    e.preventDefault()

    const messageText = chatInput.value.trim()
    if(messageText === '') return

    //Crear burbuja de mansaje
    const userBubble = document.createElement('div')
    userBubble.textContent = messageText
    userBubble.classList.add('message','user-message')
    chatMessages.appendChild(userBubble)

    chatInput.value=''
    chatMessages.scrollTop = chatMessages.scrollHeight

})