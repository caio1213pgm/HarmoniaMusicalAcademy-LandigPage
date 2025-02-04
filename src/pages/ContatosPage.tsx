import Footer from "../components/Footer";
import Formulario from "../components/Formulario";
import Header from "../components/Header";
import Iframe from "../components/iframeComponent/Iframe";

function ContatosPage() {
  return (
    <div className="bodyContatos">
      <Header />
      <div className="container">
        <Iframe />
        <Formulario />
      </div>
      <Footer />
    </div>
  );
}

export default ContatosPage;
