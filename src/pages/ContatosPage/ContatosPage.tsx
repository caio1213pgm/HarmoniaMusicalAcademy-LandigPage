import Footer from "../../components/footerComponent/Footer";
import Formulario from "../../components/formularioComponent/Formulario";
import Header from "../../components/headerComponent/Header";
import Iframe from "../../components/iframeComponent/Iframe";
import style from "./contatosPage.module.css"

function ContatosPage() {
  return (
    <div className={style.body}>
      <Header />
      <div className={style.content}>
        <Iframe />
        <Formulario />
      </div>
      <Footer />
    </div>
  );
}

export default ContatosPage;
