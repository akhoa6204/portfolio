import AboutMe from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduce from "./components/Introduce";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <Header />
      <Introduce />
      <AboutMe />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
