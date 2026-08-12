// Objetos del chat
const chatTrigger = document.querySelector('.chat-trigger')
const helpWindow = document.querySelector('.help-window-1')
const closeBtn = document.querySelector('.chat-close-btn')

// Ventanas del chat

const Wx = document.querySelector('#Wx')
const W1x = document.querySelector('#W1-x')
const W11x = document.querySelector('#W1-1-x')
const W13x = document.querySelector('#W1-3-x')
const W2x = document.querySelector('#W2-x')
const W3x = document.querySelector('#W3-x')
const WChat = document.querySelector('#W-chat-labu')

// Botones de las ventanas

//// Wx
const btn_primera_vez = document.querySelector("#btn-primera-vez") 
const btn_busco_contratar = document.querySelector("#btn-busco-contratar") 
const btn_busco_solicitudes = document.querySelector("#btn-busco-solicitudes") 
const btn_iniciar_chat_labu = document.querySelector("#btn-iniciar-chat-labu") 
//// W1x
const btn_quiero_registrarme = document.querySelector("#btn-quiero-registrarme") 
const btn_tutorial = document.querySelector("#btn-tutorial") 
const btn_preguntas_frecuentes = document.querySelector("#btn-preguntas-frecuentes") 
const btn_iniciar_chat_labu_W1 = document.querySelector("#btn-iniciar-chat-labu-W1") 
//// W11x
const btn_quiero_ofrecer_servicios = document.querySelector("#btn-quiero-ofrecer-servicios") 
const btn_quiero_contratar_servicios = document.querySelector("#btn-quiero-contratar-servicios") 
//// W13x
const btn_btn_como_subir_trabajos = document.querySelector("#btn-como-subir-trabajos") 
const btn_btn_hacer_una_pregunta = document.querySelector("#btn-hacer-una-pregunta") 
//// W2x
const btn_btn_buscar_profesionales = document.querySelector("#btn-buscar-profesionales") 
const btn_btn_calculadora_costos = document.querySelector("#tn-calculadora-costos") 
const btn_btn_profesionales_destacados = document.querySelector("#btn-profesionales-destacados") 
const btn_garantia = document.querySelector("#btn-garantia") 
//// W3x
const btn_btn_consejos_mejorar_perfil = document.querySelector("#btn-consejos-mejorar-perfil") 
const btn_btn_calculadora = document.querySelector("#btn-calculadora") 

//   ****************************************************************************
//                                 Funciones
//   ****************************************************************************

// Abrir el chat

chatTrigger.addEventListener('click', function(){
    helpWindow.classList.add('is-active')
    chatTrigger.classList.add('is-hidden')

})

closeBtn.addEventListener('click', function(){
    helpWindow.classList.remove('is-active')
    chatTrigger.classList.remove('is-hidden')
})

// Pasar opciones entre ventanas

btn_primera_vez.addEventListener('click',function(){
    Wx.classList.add('is-hidden')
    W1x.classList.remove('is-hidden')
})

btn_busco_contratar.addEventListener('click', function () {
    Wx.classList.add('is-hidden')
    W2x.classList.remove('is-hidden')
})

btn_busco_solicitudes.addEventListener('click', function () {
    Wx.classList.add('is-hidden')
    W3x.classList.remove('is-hidden')
})

btn_primera_vez.addEventListener('click', function () {
    Wx.classList.add('is-hidden')
    W1x.classList.remove('is-hidden')
})

btn_iniciar_chat_labu.addEventListener('click', function () {
    Wx.classList.add('is-hidden')
    WChat.classList.remove('is-hidden')
    
})

btn_iniciar_chat_labu_W1.addEventListener('click', function () {
    W1x.classList.add('is-hidden')
    WChat.classList.remove('is-hidden')

})

btn_quiero_registrarme.addEventListener('click', function () {
    W1x.classList.add('is-hidden')
    W11x.classList.remove('is-hidden')
})

btn_preguntas_frecuentes.addEventListener('click', function () {
    W1x.classList.add('is-hidden')
    W13x.classList.remove('is-hidden')
})
