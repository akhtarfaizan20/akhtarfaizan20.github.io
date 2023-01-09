import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Protfolio/Portfolio";
import Works from "./Components/Works/Works";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Works />
      {/* <Experience /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
