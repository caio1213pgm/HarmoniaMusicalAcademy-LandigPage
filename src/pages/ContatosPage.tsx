import Footer from "../components/Footer";
import Formulario from "../components/Formulario";
import Header from "../components/Header";

function ContatosPage(){
    return (
        <div className="bodyContatos">
            <Header/>
            <div className="container">
                <Formulario/>
            </div>
            <Footer/>
        </div>
    )
}

export default ContatosPage;