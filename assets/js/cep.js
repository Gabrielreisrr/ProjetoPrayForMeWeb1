document.addEventListener("DOMContentLoaded", () => {
  const cepForm = document.getElementById("cepForm");
  const cepInput = document.getElementById("cep");
  const cepResult = document.getElementById("cepResult");

  cepForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const cep = cepInput.value.replace("-", "").trim();

    if (!/^[0-9]{8}$/.test(cep)) {
      cepResult.textContent = "Por favor, insira um CEP válido.";
      cepResult.style.color = "red";
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) throw new Error("Erro ao buscar o CEP.");

      const data = await response.json();
      if (data.erro) {
        cepResult.textContent = "CEP não encontrado. Por favor, tente outro.";
        cepResult.style.color = "red";
      } else {
        if (data.uf !== "SP") {
          cepResult.textContent = "Desculpe, não entregamos para esta região.";
          cepResult.style.color = "red";
        } else {
          cepResult.textContent = `Entrega disponível! Endereço: ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
          cepResult.style.color = "green";
        }
      }
    } catch (error) {
      cepResult.textContent =
        "Erro ao verificar o CEP. Tente novamente mais tarde.";
      cepResult.style.color = "red";
    }
  });
});
