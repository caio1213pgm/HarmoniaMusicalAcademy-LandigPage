import "../App.css";
import BackHeader from "../components/backHeaderComponent/BackHeader";
import Footer from "../components/Footer";
import HideAppBar from "../components/Header";
import Inicio from "../components/Inicio";
import Testimonial from "../components/Testimonials";

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
