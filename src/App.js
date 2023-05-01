import "./App.css";
import "./components/styles/aboutMe.css";
import "./components/styles/contacts.css";
import "./components/styles/education.css";
import "./components/styles/experience.css";
import "./components/styles/footer.css";
import "./components/styles/header.css";
import "./components/styles/navbar.css";
import "./components/styles/projects.css";
import "./components/styles/skills.css";
import "./components/styles/interests.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-tsparticles";
import NavBar from "./components/navbar";
import Header from "./components/header";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Interests from "./components/interests";
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
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Interests />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
