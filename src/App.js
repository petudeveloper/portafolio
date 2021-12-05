import NavBar from './components/NavBar/NavBar';
import Introduction from './components/Introduction/Introduction';
import AboutMe from './components/AboutMe/AboutMe';
import Work from './components/Work/Work';

const App = () => (
  <div className="App">
    <NavBar />
    <div className="content">
      <Introduction />
      <AboutMe />
      <Work />
    </div>
  </div>
);

export default App;
