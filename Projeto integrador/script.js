function Register() {
    const usuarioInput = document.getElementById('Nusuario');
    const senhaInput = document.getElementById('Nsenha');
    const confirmaSenhaInput = document.getElementById('NconfirmaSenha');
    let verifi = document.getElementById("p-alert");


    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value;
    const confirmaSenha = confirmaSenhaInput.value;


    if (usuario === "" || senha === "" || confirmaSenha === "") {
        verifi.textContent = "Por favor, preencha todos os campos!";
        verifi.style.color = "red"
        return;
    }


    if (usuario.length < 3) {
        verifi.textContent = "O nome de usuário ou email deve ter pelo menos 3 caracteres.";
        return;
    }


    if (senha !== confirmaSenha) {
        verifi.textContent = "As senhas não coincidem! Verifique o que digitou.";
        confirmaSenhaInput.focus();
        return;
    }

    if (senha.length < 6) {
        verifi.textContent = "A senha deve ter pelo menos 6 caracteres para sua segurança.";
        return;
    }


    verifi.textContent = "Cadastro realizado com sucesso! Bem-vindo à Rêve de Lotus.";

    window.location.href = "login.html";


    usuarioInput.value = "";
    senhaInput.value = "";
    confirmaSenhaInput.value = "";
}

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".carousel-container .card");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (cards.length === 0) return;

    let currentIndex = 0;


    function showCard(index) {

        cards.forEach(card => card.classList.remove("active"));


        if (index >= cards.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = cards.length - 1;
        } else {
            currentIndex = index;
        }


        cards[currentIndex].classList.add("active");
    }


    nextBtn.addEventListener("click", () => {
        showCard(currentIndex + 1);
    });


    prevBtn.addEventListener("click", () => {
        showCard(currentIndex - 1);
    });
});

document.addEventListener("DOMContentLoaded", function () {


    const cards = document.querySelectorAll(".carousel-container .card");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (cards.length > 0) {
        let currentIndex = 0;

        function showCard(index) {
            cards.forEach(card => card.classList.remove("active"));
            if (index >= cards.length) { currentIndex = 0; }
            else if (index < 0) { currentIndex = cards.length - 1; }
            else { currentIndex = index; }
            cards[currentIndex].classList.add("active");
        }

        nextBtn.addEventListener("click", () => { showCard(currentIndex + 1); });
        prevBtn.addEventListener("click", () => { showCard(currentIndex - 1); });
    }



    const navButtons = document.querySelectorAll(".nav-container .nav-button");
    const secoesAssunto = document.querySelectorAll(".secao-assunto");

    navButtons.forEach(button => {
        button.addEventListener("click", function (event) {



            navButtons.forEach(btn => btn.classList.remove("active"));


            secoesAssunto.forEach(secao => secao.classList.remove("active"));


            this.classList.add("active");


            const alvoId = this.getAttribute("data-target");
            const secaoAlvo = document.getElementById(alvoId);
            if (secaoAlvo) {
                secaoAlvo.classList.add("active");
            }
        });
    });

});

function Logar() {

    const emailInput = document.getElementById('Lemail');
    const usuarioInput = document.getElementById('Lusuario');
    const senhaInput = document.getElementById('Lsenha');
    let verifi = document.getElementById("par-alert");


    const email = emailInput.value.trim();
    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value;

    verifi.textContent = "";


    if (usuario === "" || email === "" || senha === "") {
        verifi.textContent = "Por favor, preencha todos os campos!";
        verifi.style.color = "red";
        return;
    }


    const regexProvedoresFamosos = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook|yahoo)\.com(\.[a-z]{2})?$/i;

    if (!regexProvedoresFamosos.test(email)) {
        verifi.textContent = "Insira um e-mail válido (Gmail, Hotmail, Outlook ou Yahoo).";
        verifi.style.color = "red";
        emailInput.focus();
        return;
    }


    verifi.textContent = "Login efetuado com sucesso! Redirecionando...";
    verifi.style.color = "green";

}


document.addEventListener("DOMContentLoaded", function() {
    const btnLogout = document.getElementById("btn-logout");
    
    
    if (btnLogout) {
        btnLogout.addEventListener("click", function() {
            let alerta = document.getElementById("user-alert");
            
            if (alerta) {
                alerta.textContent = "Desconectando... Voltando ao Início.";
                alerta.style.color = "#7a1e3f";
            }
            
            
            setTimeout(function() {
                window.location.href = "index.html";
            }, 1200);
        });
    }
});