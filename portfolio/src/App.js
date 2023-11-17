import Navbar from "./Components/Navbar"
import Intro from "./Components/Intro"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import "./style.css"

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <hr/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
