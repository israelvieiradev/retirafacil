const senha = document.querySelector("#senha");
const botaoOlho = document.querySelector("#id-icon-eye");

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