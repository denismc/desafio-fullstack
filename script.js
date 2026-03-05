document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const nomes = [
      form.nome1.value,
      form.nome2.value,
      form.nome3.value,
      form.nome4.value,
      form.nome5.value
    ].filter(n => n.trim() !== "");

    const dados = {
      names: nomes,
      message: form.historia.value
    };

    try {
      const response = await fetch("https://fsdt-contact.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
      });

      if (!response.ok) throw new Error();

      form.reset();
      alert("Enviado com sucesso");

    } catch {
      alert("Ocorreu um erro");
    }
  });

});