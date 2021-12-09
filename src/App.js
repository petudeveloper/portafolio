import NavBar from './components/NavBar/NavBar';
import Introduction from './components/Introduction/Introduction';
import AboutMe from './components/AboutMe/AboutMe';
import Work from './components/Work/Work';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className="App">
    <NavBar />
    <div className="content">
      <Introduction />
      <AboutMe />
      <Work />
      <Projects />
      <Contact />
    </div>
    <Footer />
  </div>
);

export default App;
