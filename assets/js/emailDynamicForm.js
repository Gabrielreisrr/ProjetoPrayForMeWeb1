document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("UeiuR5rqUZ95-c7d7");

  const form = document.getElementById("dynamicForm");
  const emailInput = document.getElementById("email");
  const formResponse = document.getElementById("formResponse");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formResponse.textContent = "Por favor, insira um e-mail válido.";
      formResponse.style.color = "red";
      return;
    }

    const templateParams = {
      user_email: email,
      subject: "Bem-vindo à Pray for Me!",
      message:
        "Obrigado por se inscrever para receber nossas ofertas exclusivas!",
    };

    emailjs.send("service_pw7hndm", "template_sdm4f59", templateParams).then(
      () => {
        formResponse.textContent =
          "Obrigado por se inscrever! Confira seu e-mail para mais informações.";
        formResponse.style.color = "green";
        form.reset();
      },
      (error) => {
        formResponse.textContent =
          "Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.";
        formResponse.style.color = "red";
        console.error("Erro no EmailJS:", error);
      }
    );
  });
});
