import { useRef } from 'react';
import NavBar from './components/NavBar/NavBar';
import Introduction from './components/Introduction/Introduction';
import AboutMe from './components/AboutMe/AboutMe';
import Work from './components/Works/Works';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Email from './components/email/Email';
import Footer from './components/Footer/Footer';

const App = () => {
  const aboutRef = useRef();
  const experienceRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();
  return (
    <div className="App">
      <NavBar
        aboutProp={aboutRef}
        experienciaProp={experienceRef}
        workRefProp={workRef}
        contactProp={contactRef}
      />
      <div className="content">
        <Introduction />
        <AboutMe refProp={aboutRef} />
        <Work refProp={experienceRef} />
        <Projects refProp={workRef} />
        <Contact refProp={contactRef} />
      </div>
      <SocialMedia />
      <Email />
      <Footer />
    </div>
  );
};

export default App;
