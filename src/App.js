import './App.css';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';

function App() {
  return (
    <div className="App">
      <form>
        <SectionOne />
        <br />
        <SectionTwo />
        <br />
        <SectionThree />
        <br />
        <SectionFour />
      </form>
    </div>
  );
}

export default App;
