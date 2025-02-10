import Footer from "../components/footerComponent/Footer";
import Header from "../components/headerComponent/Header";
import ServiceLista from "../components/servicesListComponent/ServiceLista";

function ServicosPage() {
  return (
    <div className="">
      <Header />
      <div className="">
        <ServiceLista />
      </div>
      <Footer />
    </div>
  );
}

export default ServicosPage;
