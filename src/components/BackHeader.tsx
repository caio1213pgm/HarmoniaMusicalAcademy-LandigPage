import { useNavigate } from "react-router";
import Botao from "./Botao";

function BackHeader() {
  const navigate = useNavigate()
  return (
    <div className="allHeader">
      <div className="back-header"></div>
      <div className="back-header__logo"></div>
      <div className="back-header-texto">
        <div>
            <h3>Descubra o Músico que Existe em Você!</h3>
            <p>
              Aprenda com os melhores professores e transforme sua paixão pela
              música em habilidade!
            </p>
        </div>
        <Botao texto="Faça uma aula gratuita" classe="botao" funcao={() => {
          navigate("/contatos")
        }} />
      </div>
    </div>
  );
}
export default BackHeader;
