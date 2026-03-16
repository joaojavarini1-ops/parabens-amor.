// Lógica da Senha
function moveNext(input, index) {
    if (input.value.length === 1) {
        const nextInput = document.querySelectorAll('.digit')[index];
        if (nextInput) nextInput.focus();
    }
}

function validar() {
    const senha = Array.from(document.querySelectorAll('.digit')).map(i => i.value).join('');
    if (senha === "1207") { // SUA SENHA
        iniciarJornada();
    } else {
        document.getElementById('status').innerText = "Senha incorreta, tente de novo...";
        document.querySelectorAll('.digit').forEach(i => i.value = "");
        document.querySelectorAll('.digit')[0].focus();
    }
}

// Controle das Fases
function iniciarJornada() {
    // FASE 1: Some o cadeado rosa
    document.getElementById('fase-cadeado').classList.add('sumir');
    
    setTimeout(() => {
        // FASE 2: Aparece a Galáxia devagar
        const galaxia = document.getElementById('fase-galaxia');
        galaxia.style.display = 'block';
        setTimeout(() => { galaxia.style.opacity = '1'; }, 100);
        gerarEstrelas();
        
        // FASE 2.1: Aparece o Coração Gigante
        setTimeout(() => {
            document.getElementById('coracao').style.opacity = '1';
        }, 3500); // Aparece 3.5 segundos depois da galáxia começar
        
        // FASE 3: Entra o Ursinho Atirador
        setTimeout(() => {
            const fAtirador = document.getElementById('fase-atirador');
            fAtirador.style.display = 'flex'; // Usar flex para centralizar o ursinho se for o caso
            const ursinho = document.getElementById('ursinho');
            ursinho.style.left = "15%"; // Ursinho entra na tela
            
            // FASE 3.1: O Ursinho Atira
            setTimeout(() => {
                const bullet = document.getElementById('bullet');
                bullet.style.display = 'block';
                bullet.style.left = ursinho.getBoundingClientRect().right - 30 + 'px'; // Posição do ursinho
                bullet.style.bottom = ursinho.getBoundingClientRect().height / 2 + 'px'; // Altura da mira
                
                // Animação da bala
                setTimeout(() => {
                    bullet.style.transition = "1s linear";
                    bullet.style.left = "50%"; // Mira o centro
                    bullet.style.bottom = "50%"; // Mira o centro
                    
                    // FASE 4: O Livro 3D aparece no centro
                    setTimeout(() => {
                        const livro = document.getElementById('fase-livro');
                        livro.classList.add('aparecer');
                        setTimeout(() => { livro.style.opacity = '1'; }, 100);
                        bullet.remove(); // Remove a bala
                    }, 1000); // 1 segundo depois da bala chegar no centro
                }, 100);
            }, 3000); // Ursinho espera 3 segundos para atirar
        }, 8000); // Atirador aparece 8 segundos depois da galáxia começar
        
    }, 1500); // Cadeado some em 1.5 segundos
}

// Gerador de Estrelas no Canvas
function gerarEstrelas() {
    const canvas = document.getElementById('canvas-stars');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const stars = [];
    
    for (let i = 0; i < 300; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5,
            opacity: Math.random()
        });
    }
    
    function animar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(s => {
            ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(animar);
    }
    animar();
}

// Lógica para Virar as Páginas do Livro
document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    let currentPage = 0; // Começa na capa
    
    // Configura a z-index inicial para todas as páginas
    pages.forEach((page, index) => {
        page.style.zIndex = pages.length - index;
    });
    
    pages.forEach((page, index) => {
        page.addEventListener('click', () => {
            if (index === currentPage && !page.classList.contains('flipped')) {
                // Virar a página para a direita
                page.classList.add('flipped');
                currentPage++;
                // Troca o z-index da próxima página para ela aparecer na frente
                if (currentPage < pages.length) {
                    pages[currentPage].style.zIndex = pages.length + 1;
                }
            } else if (index === currentPage - 1 && page.classList.contains('flipped')) {
                // Virar a página de volta para a esquerda
                page.classList.remove('flipped');
                currentPage--;
                // Troca o z-index da página anterior
                page.style.zIndex = pages.length - index;
            }
        });
    });
});
