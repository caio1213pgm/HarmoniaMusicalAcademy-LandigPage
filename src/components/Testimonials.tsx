import RecommendIcon from "@mui/icons-material/Recommend";
import DialogTestimonial from "./DialogTestimonial";
import React from "react";
type pessoaDoDepoimento = {
  nome: string;
  parcial: string;
  id: number;
  complemento: string;
};
function Testimonial() {

  const [aberto, setAberto] = React.useState(false);
  function isOpen(){
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    aberto ? setAberto(false) : setAberto(true);
  }

  const testimonial: pessoaDoDepoimento[] = [
    {
      nome: "Lucas - Aluno",
      parcial:
        "Nunca imaginei que eu poderia tocar violão tão bem em tão pouco tempo. Recomendo para todos!",
      complemento:
        " Os métodos de ensino são claros e dinâmicos, o que torna o aprendizado muito mais rápido e divertido. Além das aulas, os workshops e os recitais foram experiências únicas para aprimorar minhas habilidades e conhecer outras pessoas apaixonadas por música.",
      id: 1,
    },
    {
      nome: "Carla - Aluna",
      parcial:
        "Aprender música aqui foi transformador! Os professores são incríveis e o ambiente é muito acolhedor.",
      complemento:
        " Antes, eu achava que tocar piano era algo impossível para mim, mas com o apoio e paciência dos professores, consegui superar meus limites. Além disso, as apresentações organizadas pela escola me ajudaram a vencer o medo de tocar em público.",
      id: 2,
    },
    {
      nome: "Luís - Pai de Lucas",
      parcial:
        "Cada aula é uma nova descoberta, e como pai,  me emociono ao vê-lo se apresentando nos eventos da escola.",
      complemento:
        " Sou extremamente grato por toda a atenção e cuidado que a equipe tem com os alunos. Recomendo a escola para qualquer família que deseja ver seus filhos florescerem através da música!",
      id: 3,
    },
  ];
  return (
    <div className="testimonialContainer">
      <div className="testimonialContainer2"></div>
      <div className="testimonialContainer3"></div>
      <div className="testimonialTXT">
        <h3>Depoimentos de pais e alunos:</h3>
      </div>
      <div className="testimonialContent">
        {testimonial.map((depoimento) => (
          <div key={depoimento.id} className="testimonialCard">
            <h4>
              <RecommendIcon sx={{ color: "#000" }} /> {depoimento.nome}
            </h4>
            <p>{depoimento.parcial}</p>
            <DialogTestimonial
              name={depoimento.nome}
              text={depoimento.parcial + depoimento.complemento}
              contentButton="Ler mais"
              classe="botaoDialog"
              isOpen={isOpen}
              aberto={aberto}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
