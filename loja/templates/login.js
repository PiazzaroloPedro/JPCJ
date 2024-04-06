const forms = document.querySelector(".froms"), // Corrigido para ".froms"
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        const senhaInput = eyeIcon.previousElementSibling;
        if (senhaInput.type === "password") {
            senhaInput.type = "text";
            eyeIcon.classList.remove('bxs-hide');
            eyeIcon.classList.add('bx-show');
        } else {
            senhaInput.type = "password";
            eyeIcon.classList.remove('bx-show');
            eyeIcon.classList.add('bxs-hide');
        }
    });
});

links.forEach(link => { // Corrigido para link
    link.addEventListener("click", e => { // Corrigido para link
        e.preventDefault(); // Impedindo o envio do formulário
        forms.classList.toggle("show-signup");
    });
});
