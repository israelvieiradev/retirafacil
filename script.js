const senha = document.querySelector("#senha");
const botaoOlho = document.querySelector("#id-icon-eye");

const hamburger = document.querySelector("#btn-hamburger");
const menu = document.querySelector(".nav-links");

//ao clicar no hamburger muda o display do menu de flex para none ou vice-versa
hamburger.addEventListener("click", () => {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});

//muda o display do menu para flex quando maior que 768px
window.addEventListener("resize", function () {

    if (window.innerWidth > 768) {
        document.querySelector(".nav-links").style.display = "flex";
    } else {
        document.querySelector(".nav-links").style.display = "none";
    }

});

//ao clicar no icone olho muda a senha de invisivel para visivel e vice-versa
botaoOlho.addEventListener("click", function () {
    if (senha.type === "password") {
        senha.type = "text";

        botaoOlho.innerHTML = '<i data-lucide="eye"></i>';
        lucide.createIcons();
    } else {
        senha.type = "password";

        botaoOlho.innerHTML = '<i data-lucide="eye-closed"></i>';
        lucide.createIcons();
    }

});

