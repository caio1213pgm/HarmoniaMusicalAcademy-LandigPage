import { SetStateAction, useState } from "react";
import InputTXT from "./InputTXT";
import DialogTestimonial from "./DialogTestimonial";

function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [aberto, setAberto] = useState(false);

  function isOpen(){
    if(nome === "" || email === ""){
      return alert("Preencha todos os campos");
    } else{
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      aberto ? setAberto(false) : setAberto(true);
    }
  }

  function handleChangeNome(event: {
    target: { value: SetStateAction<string> };
  }) {
    setNome(event.target.value);
  }
  function handleChangeEmail(event: {
    target: { value: SetStateAction<string> };
  }) {
    setEmail(event.target.value);
  }


  return (
    <form action="" className="Formulario">
      <label className="txtForms">Nome:</label>
      <InputTXT
        txtPlace="Digite seu nome"
        className="inputForm"
        handleChange={handleChangeNome}
        type="text"
      />
      <label className="txtForms">Email:</label>
      <InputTXT
        txtPlace="Digite seu email"
        className="inputForm"
        handleChange={handleChangeEmail}
        type="email"
      />

      <DialogTestimonial
        name="Formulário de inscrição"
        text={
          "Olá " +
          nome +
          "! Obrigado pelo seu interesse em se matricular na nossa escola de música, abra a caixa de mensagem do seu email: " +
          email +
          " e procure por nós lá, Até mais!"
        }
        contentButton="Enviar"
        classe="botaoForms"
        isOpen={isOpen}
        aberto={aberto}
      />
    </form>
  );
}

export default Formulario;
