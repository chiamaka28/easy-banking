import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Hero />
      <Section />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
