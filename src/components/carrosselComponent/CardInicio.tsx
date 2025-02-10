/* eslint-disable react-refresh/only-export-components */
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router";
import React, { useState, useEffect } from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Botao from "../Botao";
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import SchoolIcon from '@mui/icons-material/School';
import Groups2Icon from '@mui/icons-material/Groups2';
import StraightenIcon from '@mui/icons-material/Straighten';
import ChairIcon from '@mui/icons-material/Chair';
import style from "./carrossel.module.css"
type conteudoCard = {
  title: string;
  image: React.ReactNode;
  id: number;
  paragraph: string;
  paragraph2: string;
};

export const cardData: conteudoCard[] = [
  {
    title: "Aulas para Todos os Níveis",
    image: <Groups2Icon fontSize="large"/>,
    id: 1,
    paragraph: "Desde iniciantes até músicos avançados.",
    paragraph2: " Seja você um iniciante que nunca pegou um instrumento ou um músico avançado em busca de aperfeiçoamento, temos o curso ideal para o seu nível. Nosso método de ensino é estruturado para garantir uma evolução contínua"
  },
  {
    title: "Professores Experientes",
    image: <SchoolIcon/>,
    id: 2,
    paragraph: "Músicos profissionais com anos de experiência no ensino.",
    paragraph2: " Cada professor traz não apenas conhecimento técnico, mas também paixão pela música, garantindo aulas envolventes, dinâmicas e inspiradoras. Aqui, você aprenderá diretamente com quem vive e respira música todos os dias."
  },
  {
    title: "Variedade de Instrumentos",
    image: <StraightenIcon />,
    id: 3,
    paragraph: "Violão, piano, violino, bateria, canto e mais!",
    paragraph2: " Se você ainda não sabe qual instrumento escolher, nossos professores podem ajudá-lo a encontrar o que mais combina com seu estilo e personalidade musical. Além disso, você pode aprender a tocar vários instrumentos ao mesmo tempo."
  },
  {
    title: "Adaptável a sua rotina",
    image: <AccessAlarmsIcon/>,
    id: 4,
    paragraph: "Aulas presenciais e online,  adaptadas à sua rotina.",
    paragraph2: " Sabemos que a rotina pode ser corrida, por isso oferecemos horários flexíveis para que você possa aprender no seu próprio tempo. Além das aulas presenciais, disponibilizamos opções online com a mesma qualidade de ensino, permitindo que você estude de onde estiver."
  },
  {
    title: "Ambiente Aconchegante",
    image: <ChairIcon/>,
    id: 5,
    paragraph: "Espaços modernos e totalmente equipados.",
    paragraph2: " Contamos com salas equipadas com instrumentos de alta qualidade, tratamento acústico e um ambiente acolhedor que estimula a criatividade. Aqui, cada aluno encontra um lugar para se expressar livremente e explorar todo o seu potencial artístico."
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
        className={style.mySwiper}
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id} className={style.card}>
            <div className={style.cardContent}>
              <h4>{card.title}</h4>
              <p>{card.paragraph}</p>
              <Botao
                funcao={() => {
                  navigate("/servicos");
                }}
                texto="Saiba mais"
                classe={style.botao}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default CardInicio;
