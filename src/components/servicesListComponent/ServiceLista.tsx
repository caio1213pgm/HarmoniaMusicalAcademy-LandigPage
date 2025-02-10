import style from "./service.module.css";
import { cardData } from "../carrosselComponent/CardInicio";
import { useNavigate } from "react-router";
import Botao from "../Botao";

function ServiceLista() {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      {cardData.map((card) => (
        <div key={card.id} className={style.card}>
          <div className={style.cardHeader}>
            {card.image}
            <h2>{card.title}</h2>
          </div>
          <div className={style.cardBody}>
            <p>{card.paragraph + card.paragraph2}</p>
            <Botao
              texto="Agende sua aula"
              classe={style.botao}
              funcao={() => navigate("/contatos")}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceLista;
