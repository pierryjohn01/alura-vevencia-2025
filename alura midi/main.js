// Função para tocar o som
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento ou seletor não encontrado!');
    }
}

// Seleciona todas as teclas
const listaDeTeclas = document.querySelectorAll('.tecla');

// Laço para percorrer todas as teclas
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // Template string correta

    // Ao clicar com o mouse
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    // Ao pressionar Enter ou Espaço
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    // Remove a classe quando solta a tecla
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
