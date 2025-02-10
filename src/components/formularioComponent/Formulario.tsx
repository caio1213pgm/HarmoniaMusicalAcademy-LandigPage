import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router";
import InputTXT from "../InputTXT";
import Botao from "../Botao";
import SendIcon from "@mui/icons-material/Send";
import style from "./formulario.module.css"

function Formulario() {
  const navigate = useNavigate();
  const [nomeValue, setNomeValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  function enviarFormulario() {
    if (nomeValue === "" || emailValue === "") {
      return alert("Preencha todos os campos!");
    }
    return navigate("/boasVindas", {
      state: { nome: nomeValue, email: emailValue },
    });
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
    <div className={style.container}>
      <div className={style.boxInput}>
        <label>Nome:</label>
        <InputTXT
          txtPlace="Digite seu nome"
          className={style.input}
          handleChange={handleChangeNome}
          type="text"
        />
      </div>
      <div className={style.boxInput}>
        <label>Email:</label>
        <InputTXT
          txtPlace="Digite seu email"
          className={style.input}
          handleChange={handleChangeEmail}
          type="email"
        />
      </div>
      <Botao
        funcao={() => enviarFormulario()}
        texto={<p>Enviar {<SendIcon />}</p>}
        classe={style.botao}
      />
    </div>
  );
}

export default Formulario;
