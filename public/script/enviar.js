const botao = document.getElementById('enviar-mensagem')
botao.onclick = enviarMensagem

function enviarMensagem() {
    botao.blur();
    const num = "5518996650783"; 
    const url = 'https://api.whatsapp.com/send?phone=${num}&test='
    window.open(url)

}