// Máquina de escrever no título
const titleText = "Vamos descobrir seu destino amoroso 💘";
let i = 0;
const titleEl = document.getElementById("title");

function typeWriter() {
  if (i < titleText.length) {
    titleEl.innerHTML += titleText.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
typeWriter();

// Controle do quiz
function nextQuestion(current) {
  const currentQ = document.getElementById(`q${current}`);
  const nextQ = document.getElementById(`q${current + 1}`);

  if (!validateInput(currentQ)) return;

  currentQ.classList.remove("active");
  nextQ.classList.add("active");
}

function validateInput(questionDiv) {
  const input = questionDiv.querySelector("input");
  if (!input.value.trim()) {
    alert("Por favor, preencha essa pergunta!");
    input.focus();
    return false;
  }
  return true;
}

function showResult() {
  const inputs = ["nome", "idade", "cor", "musica", "signo"];
  let valid = true;
  let answers = {};

  inputs.forEach((id) => {
    const val = document.getElementById(id).value.trim();
    if (!val) valid = false;
    answers[id] = val;
  });

  if (!valid) {
    alert("Por favor, preencha todas as perguntas!");
    return;
  }

  // Esconde formulário, mostra loading
  document.getElementById("quizForm").classList.add("hidden");
  const loadingEl = document.getElementById("loading");
  loadingEl.classList.remove("hidden");

  // Toca música suave
  const music = document.getElementById("music");
  music.volume = 0.15;
  music.play();

  setTimeout(() => {
    loadingEl.classList.add("hidden");

    // Revelação final animada
    const resultEl = document.getElementById("result");
    resultEl.classList.remove("hidden");

    const finalText = `${answers.nome}, você será namorada de `;
    const mateusName = "Mateus Oliveira";

    resultEl.innerHTML = `<p>${finalText}<span id="mateusName"></span>! 😍</p>`;

    // Máquina de escrever para o nome "Mateus Oliveira"
    let j = 0;
    const mateusEl = document.getElementById("mateusName");

    function typeMateus() {
      if (j < mateusName.length) {
        mateusEl.innerHTML += mateusName.charAt(j);
        j++;
        setTimeout(typeMateus, 120);
      } else {
        // Depois do texto animado, anima o zoom e brilho
        mateusEl.style.animation = "shine 2s ease-in-out infinite alternate";
      }
    }
    typeMateus();
  }, 3500);
}

// Fundo animado com corações
const heartsBg = document.querySelector(".hearts-bg");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  heart.style.fontSize = 12 + Math.random() * 24 + "px";
  heart.style.opacity = Math.random() * 0.6 + 0.4;

  heartsBg.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

// Cria vários corações no começo e de tempos em tempos
for (let i = 0; i < 15; i++) {
  setTimeout(createHeart, i * 500);
}
setInterval(createHeart, 1000);

/* Animação de brilho */
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes shine {
    0% { text-shadow: 0 0 5px #ff69b4; }
    100% { text-shadow: 0 0 20px #ff1493; }
  }
`, styleSheet.cssRules.length);
