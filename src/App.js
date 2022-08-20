import './App.css';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';

function App() {
  return (
    <div className="App">
      <form>
        <SectionOne />
        <br />
        <SectionTwo />
        <br />
        <SectionThree />
      </form>
    </div>
  );
}

export default App;
