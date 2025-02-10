import { useNavigate } from "react-router";
import Botao from "../Botao";
import style from "./backHeader.module.css"

function BackHeader() {
  const navigate = useNavigate();
  return (
    <div className={style.sizeHeader}>
      <div className={style.background}></div>
      <div className={style.blur}></div>
      <div className={style.headerContent}>
        <div>
          <h3>Descubra o Músico que Existe em Você!</h3>
          <p>
            Aprenda com os melhores professores e transforme sua paixão pela
            música em habilidade!
          </p>
        </div>
        <Botao
          texto="Faça uma aula gratuita"
          classe={style.botao}
          funcao={() => {
            navigate("/contatos");
          }}
        />
      </div>
    </div>
  );
}
export default BackHeader;
