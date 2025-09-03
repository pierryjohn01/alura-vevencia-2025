let amigos = [];

function adicionar() {
    let amigoInput = document.getElementById('nome-amigo');
    let nome = amigoInput.value.trim();

    if (nome === '') {
        alert('Informe o nome do amigo!');
        return;
    }

    // Impedir nomes repetidos
    if (amigos.includes(nome)) {
        alert('Nome já adicionado!');
        return;
    }

    amigos.push(nome);

    // Atualizar lista na tela
    let lista = document.getElementById('lista-amigos');
    lista.textContent = amigos.join(', ');

    amigoInput.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralha(amigos);

    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let amigoAtual = amigos[i];
        let amigoSorteado = (i === amigos.length - 1) ? amigos[0] : amigos[i + 1];
        sorteio.innerHTML += `${amigoAtual} --> ${amigoSorteado}<br>`;
    }
}

function embaralha(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('nome-amigo').value = '';
}
