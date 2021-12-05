import NavBar from './components/NavBar/NavBar';
import Introduction from './components/Introduction/Introduction';

const App = () => (
  <div className="App">
    <NavBar />
    <div className="content">
      <Introduction />
      <div>other thing</div>
      <div>other thing</div>
      <div>other thing</div>
    </div>
  </div>
);

export default App;
