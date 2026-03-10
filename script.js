const dataInicio = new Date(2025, 6, 12, 0, 0, 0); 
const textoParaEscrever = `Feliz aniversário, meu amor, e feliz aniversário para a gente 💓\n\nHoje é um dia que tem um significado enorme para mim, meu bem. É o dia em que o mundo ganhou a pessoa mais incrível que eu já conheci, a minha princesa, a minha flor, o meu amor. E ao mesmo tempo, também é um dia que celebra algo muito especial para mim: a nossa história. Porque hoje não é só o seu aniversário, mas também mais um capítulo da nossa caminhada juntos.\n\nMeu bem, eu fico pensando em como a vida é cheia de caminhos inesperados. Entre tantas pessoas no mundo, entre tantas histórias diferentes, foi justamente você que apareceu na minha vida. E desde o momento em que você entrou nela, tudo começou a fazer mais sentido.\n\nMinha princesa, você tem uma luz dentro de você que é impossível de ignorar. Seu jeito, sua alegria, sua forma de enxergar as coisas… tudo em você tem algo especial. É como se sua presença tivesse o poder de deixar qualquer lugar mais bonito, mais leve e mais cheio de vida.\n\nMeu amor, nesses oito meses ao seu lado eu aprendi coisas que eu nunca tinha sentido antes. Aprendi que o amor não está só nas grandes declarações, mas também nos pequenos momentos: nas conversas simples, nas risadas que parecem não ter fim, nos instantes em que só estar perto já é suficiente.\n\nMinha flor, você se tornou uma das partes mais importantes da minha vida. Quando penso no meu futuro, quando penso nos sonhos que quero realizar, você sempre aparece neles. Porque hoje eu não consigo imaginar minha vida sem você fazendo parte dela.\n\nMeu bem, hoje eu quero que você saiba o quanto você é especial para mim. Você é aquela pessoa que consegue transformar um dia normal em algo inesquecível. Seu sorriso tem uma força que acalma meu coração e sua presença me faz sentir uma paz que eu nunca tinha conhecido antes.\n\nMinha princesa, completar 15 anos é algo muito especial. É uma fase linda da vida, cheia de sonhos, descobertas e momentos que vão marcar para sempre o seu coração. E eu me sinto muito feliz por poder estar ao seu lado justamente nesse momento tão importante.\n\nMeu amor, se eu pudesse te dar um presente capaz de mostrar tudo o que sinto, ele seria algo impossível de colocar em uma caixa. Porque o que eu sinto por você é grande demais para caber em palavras simples.\n\nMinha flor, você é mais do que minha namorada. Você é minha companheira, minha alegria, meu abraço nos dias difíceis e o motivo de muitos dos meus sorrisos.\n\nMeu bem, eu agradeço todos os dias por ter você na minha vida. Agradeço por cada conversa, por cada momento, por cada lembrança que estamos criando juntos.\n\nMinha princesa, eu prometo continuar cuidando de você, respeitando você, apoiando você e fazendo de tudo para ver esse seu sorriso lindo todos os dias.\n\nMeu amor, feliz aniversário. Feliz aniversário para você, e feliz aniversário para a nossa história também. Que esse seja apenas mais um capítulo de muitos que ainda vamos viver juntos.\n\nEu te amooo infinitamente minha vida 🤍✨`;

const velocidade = 20; 

function atualizarContador() {
    const agora = new Date();
    const dif = agora - dataInicio;
    const dias = Math.floor(dif / (1000 * 60 * 60 * 24));
    const horas = Math.floor((dif / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((dif / (1000 * 60)) % 60);
    const segundos = Math.floor((dif / 1000) % 60);
    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}
setInterval(atualizarContador, 1000);
atualizarContador();

let i = 0;
function escrever() {
    if (i < textoParaEscrever.length) {
        let char = textoParaEscrever.charAt(i);
        document.getElementById("texto-maquina").innerHTML += char === "\n" ? "<br>" : char;
        i++;
        setTimeout(escrever, velocidade);
    }
}
window.onload = escrever;

// --- NOVAS FUNÇÕES ---

function responder(res) {
    if(res === 'sim') {
        // Muda o título para algo romântico em vez de alert
        document.getElementById('titulo-msg').innerText = "Eu te amo infinitamente! ❤️✨";
        chuvaDeCoracoes();
    }
}

function fuga() {
    const btn = document.getElementById('btn-nao');
    // Garante que o botão nunca saia totalmente da tela visível
    const larguraTela = window.innerWidth - btn.offsetWidth;
    const alturaTela = window.innerHeight - btn.offsetHeight;
    
    const randomX = Math.random() * larguraTela;
    const randomY = Math.random() * alturaTela;
    
    btn.style.position = 'fixed';
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
}

function chuvaDeCoracoes() {
    for (let j = 0; j < 50; j++) {
        setTimeout(() => {
            const coracao = document.createElement('div');
            coracao.classList.add('heart');
            coracao.innerHTML = '❤️';
            coracao.style.left = Math.random() * 100 + 'vw';
            coracao.style.animationDuration = (Math.random() * 2 + 2) + 's';
            coracao.style.opacity = Math.random();
            document.body.appendChild(coracao);
            
            // Limpa o HTML depois que cair
            setTimeout(() => coracao.remove(), 4000);
        }, j * 100);
    }
}
