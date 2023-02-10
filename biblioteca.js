let jogodeTiro = document.getElementById('fps')
let jogoDefase = document.getElementById('acao')
let jogoDeFutebol = document.getElementById('futebol')
let jogoDeAventura = document.getElementById('aventura')
let jogoDeTerror = document.getElementById('terror')
let jogoDCorrida = document.getElementById('corrida')
let tiro = document.getElementById('tiro')
function jogo1(){
    jogodeTiro.src = './imagem/26.jpg'
}
function jogo2(){
    jogodeTiro.src = './imagem/05.png'
}
function jogo3(){
    jogodeTiro.src = './imagem/51.png'
}
function jogo4(){
    jogodeTiro.src = './imagem/19.jpg'
}
function jogo5(){
    jogodeTiro.src = './imagem/04.jpg'
}
function jogo(){
    jogodeTiro.src = './imagem/09.png'
}

acao.addEventListener('click', jogo1)
jogoDeFutebol.addEventListener('click' , jogo2)
jogoDeAventura.addEventListener('click', jogo3)
jogoDeTerror.addEventListener('click', jogo4)
jogoDCorrida.addEventListener('click', jogo5)
tiro.addEventListener('click' , jogo)

function branco(){
    limpar()
    document.querySelector('body').classList.add('branco')
}
function preto(){
    limpar()
    document.querySelector('body').classList.add('preto')
}
function limpar(){
    document.querySelector('body').classList.remove('branco')
    document.querySelector('body').classList.remove('preto')
}