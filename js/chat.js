const chatMessages = document.querySelector("#chat-messages")
const chatForm = document.querySelector("#chat-form")
const chatInput = document.querySelector("#chat-input")

// Funciones para mostrar los mensajes enviados en el chat

chatForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const messageText = chatInput.value.trim();
    if (messageText === '') return;

    const userBubble = document.createElement('div');
    userBubble.textContent = messageText;
    userBubble.classList.add('message', 'user-message');
    chatMessages.appendChild(userBubble);

    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    const labuBubble = document.createElement('div');
    labuBubble.textContent = 'Escribiendo...';
    labuBubble.classList.add('message', 'labu-message');
    chatMessages.appendChild(labuBubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
        const response = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: messageText })
        });

        const data = await response.json();

        labuBubble.textContent = data.reply || 'No pude procesar tu mensaje.';

    } catch (error) {
        console.error('Error:', error);
        labuBubble.textContent = 'Ups, ocurrió un error de conexión con Labu.';
    }

    chatMessages.scrollTop = chatMessages.scrollHeight;
});