import "../App.css";
import BackHeader from "../components/backHeaderComponent/BackHeader";
import Footer from "../components/footerComponent/Footer";
import HideAppBar from "../components/headerComponent/Header";
import Inicio from "../components/carrosselComponent/Inicio";
import Testimonial from "../components/testimonialComponent/Testimonials";

function App() {
  return (
    <>
      <HideAppBar />
      <BackHeader />
      <Inicio />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
