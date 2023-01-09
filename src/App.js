import About from "./Components/About/About";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Works from "./Components/Works/Works";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Works />
    </div>
  );
}

export default App;
