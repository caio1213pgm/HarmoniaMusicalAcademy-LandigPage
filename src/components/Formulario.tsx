import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router";
import InputTXT from "./InputTXT";
import Botao from "./Botao";
import SendIcon from '@mui/icons-material/Send';

function Formulario() {
  const navigate = useNavigate();
  const [nomeValue, setNomeValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  function enviarFormulario() {
    if(nomeValue === "" || emailValue === "") {
      return alert("Preencha todos os campos!");
    } return navigate("/boasVindas", { state: { nome: nomeValue, email: emailValue } });
    
  }

  function handleChangeNome(event: {
    target: { value: SetStateAction<string> };
  }) {
    setNomeValue(event.target.value);
  }
  function handleChangeEmail(event: {
    target: { value: SetStateAction<string> };
  }) {
    setEmailValue(event.target.value);
  }

  return (
    <div className="Formulario">
      <div className="Formulario__input">
        <label className="txtForms">Nome:</label>
        <InputTXT
          txtPlace="Digite seu nome"
          className="inputForm"
          handleChange={handleChangeNome}
          type="text"
        />
      </div>
      <div className="Formulario__input">
        <label className="txtForms">Email:</label>
        <InputTXT
          txtPlace="Digite seu email"
          className="inputForm"
          handleChange={handleChangeEmail}
          type="email"
        />
      </div>
      <Botao funcao={() => enviarFormulario()} texto={<p>Enviar {<SendIcon/>}</p>} classe="botaoSend"/>
    </div>
  );
}

export default Formulario;
