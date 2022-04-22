import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';
import Hero from './Pages/Hero/Hero';
import Navigation from './Pages/Navigation/Navigation';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <div style={{ background: "black" }}>
      <Navigation></Navigation>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
