var botao1 = document.querySelector('.btn01');
var botao2 = document.querySelector('.btn02');
var botao3 = document.querySelector('.btn03');
var img1 = document.querySelector('#img1');
var img2 = document.querySelector('#img2');
var resetar = document.querySelector('#resetar')
var texto = document.querySelector('#texto');
resetar.addEventListener('click', reset)
var array = ["<img src='img/pedra.png'>", "<img src='img/papel.png'>", "<img src='img/tesoura.png'>"];
var rand = Math.floor(Math.random() * array.length);
var num = array[rand]

botao1.addEventListener('click', pedra);
botao2.addEventListener('click', papel);
botao3.addEventListener('click', tesoura);


function pedra() {
    //img1.innerHTML = "Jogador <br> <img src='img/pedra.png'>";
    
    if (rand == 0) {
        img1.innerHTML = "Jogador <br> <img src='img/pedra.png'>";
        img2.innerHTML = 'Computador' + num;
        img1.style.background = '#79A7E4';
        img2.style.background = '#79A7E4';
        texto.innerHTML = `EMPATE !! \nJogue novamente`;
    }else if (rand == 1){
        img1.innerHTML = "Jogador <br> <img src='img/pedra.png'>";
        img2.innerHTML = 'Computador' + num;
        img1.style.background = '#79A7E4';
        img2.style.background = '#B0DC82';
        texto.innerHTML = 'COMPUTADOR É VENCEDOR !! \nPapel ganha da pedra (embrulhando-a) e o papel, é feito pela mão aberta';
    }else if (rand == 2){
        img1.innerHTML = "Jogador <br> <img src='img/pedra.png'>";
        img2.innerHTML = 'Computador' + num;
        img1.style.background = '#79A7E4';
        img2.style.background = '#F3D776';
        texto.innerHTML = 'VOCÊ VENCEU !! \nPedra ganha da tesoura (amassando-a ou quebrando-a). A pedra é simbolizada por um punho fechado';
    }
}

function papel(){
    if (rand == 0) {
        img1.innerHTML = "Jogador <br> <img src='img/papel.png'>";
        img2.innerHTML = 'Computador' + num;
        img1.style.background = '#B0DC82';
        img2.style.background = '#79A7E4';
        texto.innerHTML = 'VOCÊ VENCEU !! \nPapel ganha da pedra (embrulhando-a) e o papel, é feito pela mão aberta';
    }else if (rand == 1){
        img1.innerHTML = "Jogador <br> <img src='img/papel.png'>";
        img2.innerHTML = 'Computador' + num;
        img1.style.background = '#B0DC82';
        img2.style.background = '#B0DC82';
        texto.innerHTML = 'EMPATE !! \nJogue novamente';
    }else if (rand == 2){
        img1.innerHTML = "Jogador <br> <img src='img/papel.png'>";
        img2.innerHTML = 'Computador' + num;
        img1.style.background = '#B0DC82';
        img2.style.background = '#F3D776';
        texto.innerHTML = 'COMPUTADOR VENCEDOR !! \nTesoura ganha do papel (cortando-o). A tesoura, é feita por dois dedos esticados';
    }
}

function tesoura(){
    if (rand == 0) {
        img1.innerHTML = "Jogador <br> <img src='img/tesoura.png'>";
        img2.innerHTML = 'Computador' + num;
        img1.style.background = '#F3D776';
        img2.style.background = '#79A7E4';
        texto.innerHTML = 'COMPUTADOR VENCEDOR !! \nPedra ganha da tesoura (amassando-a ou quebrando-a). A pedra é simbolizada por um punho fechado';
    }else if (rand == 1){
        img1.innerHTML = "Jogador <br> <img src='img/tesoura.png'>";
        img2.innerHTML = 'Computador' + num;
        img1.style.background = '#F3D776';
        img2.style.background = '#B0DC82';
        texto.innerHTML = 'VOCÊ VENCEU !! \nTesoura ganha do papel (cortando-o). A tesoura, é feita por dois dedos esticados';
    }else if (rand == 2){
        img1.innerHTML = "Jogador <br> <img src='img/tesoura.png'>";
        img2.innerHTML = 'Computador' + num;
        img1.style.background = '#F3D776';
        img2.style.background = '#F3D776';
        texto.innerHTML = ' EMPATE !! \nJogue novamente';
    }
}
function reset() {
    window.location.reload();
}