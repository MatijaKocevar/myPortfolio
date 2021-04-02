import "./App.css";
import "./components/styles/aboutMe.css";
import "./components/styles/contacts.css";
import "./components/styles/experience.css";
import "./components/styles/footer.css";
import "./components/styles/header.css";
import "./components/styles/navbar.css";
import "./components/styles/portfolio.css";
import "./components/styles/services.css";
import "./components/styles/testimonials.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import NavBar from "./components/navbar";
import Header from "./components/header";
import AboutMe from "./components/aboutMe";
import Services from "./components/services";
import Experience from "./components/experience";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/testimonials";
import Contacts from "./components/contacts";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#888888",
              },
            },
          },
        }}
      />
      <NavBar />
      <Header />
      <AboutMe />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
