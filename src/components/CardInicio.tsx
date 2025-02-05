/* eslint-disable react-refresh/only-export-components */
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import professor from "../assets/professor.jpg";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Botao from "./Botao";
type conteudoCard = {
  title: string;
  image: object;
  id: number;
  paragraph: string;
  paragraph2: string;
};

export const cardData: conteudoCard[] = [
  {
    title: "Aulas para Todos os Níveis",
    image: {},
    id: 1,
    paragraph: "Desde iniciantes até músicos avançados.",
    paragraph2: " Seja você um iniciante que nunca pegou um instrumento ou um músico avançado em busca de aperfeiçoamento, temos o curso ideal para o seu nível. "
  },
  {
    title: "Professores Experientes",
    image: { professor },
    id: 2,
    paragraph: "Músicos profissionais com anos de experiência no ensino.",
    paragraph2: " Cada professor traz não apenas conhecimento técnico, mas também paixão pela música, garantindo aulas envolventes, dinâmicas e inspiradoras."
  },
  {
    title: "Variedade de Instrumentos",
    image: {},
    id: 3,
    paragraph: "Violão, piano, violino, bateria, canto e mais!",
    paragraph2: " Se você ainda não sabe qual instrumento escolher, nossos professores podem ajudá-lo a encontrar o que mais combina com seu estilo e personalidade musical."
  },
  {
    title: "Adaptável a sua rotina",
    image: {},
    id: 4,
    paragraph: "Aulas presenciais e online,  adaptadas à sua rotina.",
    paragraph2: " Sabemos que a rotina pode ser corrida, por isso oferecemos horários flexíveis para que você possa aprender no seu próprio tempo. "
  },
  {
    title: "Ambiente Aconchegante",
    image: {},
    id: 5,
    paragraph: "Espaços modernos e totalmente equipados.",
    paragraph2: " Contamos com salas equipadas com instrumentos de alta qualidade, tratamento acústico e um ambiente acolhedor que estimula a criatividade."
  },
];

function CardInicio() {
  const [slideView, setSlidesView] = useState(3)

  const navigate = useNavigate();

  function handleWindowSizeChange() {
    if(window.innerWidth <= 750){
      setSlidesView(1)
    }else{
      if(window.innerWidth > 750 && window.innerWidth <= 1100){
        setSlidesView(2)
      }
    }
  }
  const effectSize = window.addEventListener("resize", handleWindowSizeChange)

  useEffect(() => {
    handleWindowSizeChange()
  }, [effectSize]);

  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={slideView}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id} className="cardContent">
            <div className="cardContentData">
              <h4>{card.title}</h4>
              <p>{card.paragraph}</p>
              <Botao
                funcao={() => {
                  navigate("/servicos");
                }}
                texto="Saiba mais"
                classe="botaoCard"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CardInicio;
