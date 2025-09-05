
import Test from './Test';
import './app.scss'
import Hero from './components/hero/Hero';
import NavBar from './components/navBar/NavBar';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
import Skills from './components/skills/Skills';
import Title from './components/skills/title/Title';
import About from './components/about/About';
import AboutTitle from './components/about/title/AboutTitle';
import Header from './components/header/Header';
const App = () => {

  return (
    <div className='scroll-container'>
      <Header/>
      <Cursor />
      <section id='Home' >
            <NavBar />
            <Hero />
      </section>
      <section id="About">
        <AboutTitle/>
        <About/>
        
      </section>
      <section id="Skill">
        <Title />
        <Skills />
      </section>

      <section id='Service'> <Parallax type="services" /> </section>
      <section><Services /></section>
      <section id='Portfolio'> <Parallax type="portfolio" /> </section>
      <Portfolio />
      <section id='Contact'><Contact /> </section>


    </div>
  );
};

export default App;
