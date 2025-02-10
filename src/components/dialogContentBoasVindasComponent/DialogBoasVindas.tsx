/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useLocation, useNavigate } from "react-router";
import { useRef, useEffect } from "react";
import style from "./dialogBoasVindas.module.css";
import Botao from "../Botao";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import WavingHandIcon from '@mui/icons-material/WavingHand';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function DialogBoasVindas() {
  const location = useLocation();
  const navigate = useNavigate();
  const locationName: string = location.state?.nome;
  const locationEmail: string = location.state?.email;
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.showModal()
      : dialogRef.current.showModal();
  }, []);

  return (
    <dialog className={style.dialog} ref={dialogRef}>
      <div className={style.container}>
        <div className={style.head}>
          {<AutoAwesomeIcon  />}
          <h1 className={style.title}>Boas vindas {locationName}!</h1>
          {<AutoAwesomeIcon />}
        </div>
        <p className={style.p1}>
          Obrigado pelo seu interesse em fazer aula conosco, mandaremos uma
          mensagem no email abaixo
        </p>
        <p className={style.email}>{locationEmail}</p>
        <p className={style.p1}>
          Obs: Se o nosso email não chegar após 10 minutos, dê uma olhada na
          caixa de spam e a lixeira.
        </p>
        <p className={style.p2}>Até Mais! {<WavingHandIcon />}</p>
        <Botao
          funcao={() => navigate("/")}
          texto={<p>Ir para a página inicial {<ArrowForwardIcon/>}</p>}
          classe={style.botao}
        />
      </div>
    </dialog>
  );
}

export default DialogBoasVindas;
