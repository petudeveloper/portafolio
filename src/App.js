import NavBar from './components/NavBar/NavBar';
import Introduction from './components/Introduction/Introduction';
import AboutMe from './components/AboutMe/AboutMe';

const App = () => (
  <div className="App">
    <NavBar />
    <div className="content">
      <Introduction />
      <AboutMe />
    </div>
  </div>
);

export default App;
