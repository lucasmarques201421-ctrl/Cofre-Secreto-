let code = "";
const correctCode = "1234";

const frases = [
    "A felicidade pode ser encontrada mesmo nas horas mais sombrias.",
    "Não são nossas habilidades que mostram quem somos, mas nossas escolhas.",
    "Palavras são uma fonte inesgotável de magia.",
    "Grandes coisas têm pequenos começos."
];

const erros = [
    "⚡ Código amaldiçoado!",
    "🪄 Feitiço incorreto!",
    "🔮 A magia falhou...",
    "🧙‍♂️ Você não domina esse feitiço.",
    "💀 O cofre rejeitou sua tentativa."
];

function addNumber(num) {
    if (code.length < 4) {

        const currentLength = code.length;

        setTimeout(() => {
            if (code.length === currentLength) {
                code += num;
                updateDisplay();
            }
        }, 120);
    }
}

function updateDisplay() {
    const dots = document.querySelectorAll(".dot");

    dots.forEach((dot, index) => {
        if (index < code.length) {
            dot.classList.add("filled");
        } else {
            dot.classList.remove("filled");
        }
    });
}

function deleteLast() {
    if (code.length > 0) {
        code = code.slice(0, -1);
        updateDisplay();
    }
}

function clearCode() {
    code = "";
    updateDisplay();
}

function checkCode() {
    const msg = document.getElementById("message");
    const card = document.querySelector(".card");

    if (code.length < 4) {
        msg.textContent = "Complete o feitiço!";
        msg.style.color = "orange";
        return;
    }

    if (code === correctCode) {
        msg.textContent = "🔓 Cofre desbloqueado!";
        msg.style.color = "#4ade80";

        card.classList.add("success");

        // frase aleatória de sucesso
        const frase = frases[Math.floor(Math.random() * frases.length)];
        document.getElementById("magic-text").textContent = frase;

        // abre tela mágica
        setTimeout(() => {
            document.getElementById("magic-screen").classList.remove("hidden");
        }, 500);

    } else {
        // ⚡ erro com frase aleatória
        const erro = erros[Math.floor(Math.random() * erros.length)];
        msg.textContent = erro;
        msg.style.color = "#facc15";

        card.classList.add("error");
        setTimeout(() => {
            card.classList.remove("error");
        }, 300);

        code = "";
        updateDisplay();
    }
}

function closeMagic() {
    document.getElementById("magic-screen").classList.add("hidden");
}