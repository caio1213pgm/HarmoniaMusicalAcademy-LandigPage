import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import professor from "../assets/professor.jpg";
import { useNavigate } from "react-router";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Botao from "./Botao";
type conteudoCard = {
  title: string;
  image: object;
  id: number;
  paragraph: string;
};

function CardInicio() {
  const cardContent: conteudoCard[] = [
    {
      title: "Aulas para Todos os Níveis",
      image: {},
      id: 1,
      paragraph: "Desde iniciantes até músicos avançados.",
    },
    {
      title: "Professores Experientes",
      image: { professor },
      id: 2,
      paragraph: "Músicos profissionais com anos de experiência no ensino.",
    },
    {
      title: "Variedade de Instrumentos",
      image: {},
      id: 3,
      paragraph: "Violão, piano, violino, bateria, canto e mais!",
    },
    {
      title: "Adaptável a sua rotina",
      image: {},
      id: 4,
      paragraph: "Aulas presenciais e online,  adaptadas à sua rotina.",
    },
    {
      title: "Ambiente Aconchegante",
      image: {},
      id: 5,
      paragraph: "Espaços modernos e totalmente equipados.",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={3}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {cardContent.map((card) => (
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
