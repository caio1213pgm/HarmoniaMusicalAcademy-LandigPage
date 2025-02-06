import style from "./DialogContentTestimonial.style.module.css";

type PropsDialogContent = {
  depoimentoNome: string;
  depoimentoParcial: string;
  depoimentoComplemento: string;
};

function DialogContentTestimonial({
  depoimentoNome,
  depoimentoParcial,
  depoimentoComplemento,
}: PropsDialogContent) {
  return (

      <div className={style.testimonial}>
        <div className={style.head}>{depoimentoNome}</div>

        <div className={style.body}>
          {depoimentoParcial + depoimentoComplemento}
        </div>
      </div>
  );
}

export default DialogContentTestimonial;
