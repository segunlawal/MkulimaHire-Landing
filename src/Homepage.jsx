import Intro from "./Intro";
import Navbar from "./Navbar";
import Features from "./Features";
import About from "./About";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Features />
      <About />
    </div>
  );
};

export default Homepage;
