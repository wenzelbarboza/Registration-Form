import './App.css';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';

function App() {
  return (
    <div className="App">
      <div className="formContainer">
        <form>
          <h3 className='formSubHeading'>Personal Details</h3>
          <SectionOne />
          <h3 className='formSubHeading'>Contact Details</h3>
          <SectionTwo />
          <h3 className='formSubHeading'>Adress Details</h3>
          <SectionThree />
          <h3 className='formSubHeading'>Other Details</h3>
          <SectionFour />
        </form>
        <div className="buttons">
          <button className='btn cancel'>CANCEL</button>
          <button className='btn submit' >SUBMIT</button>
        </div>
      </div>

      <div className="tableContainer">

      </div>
    </div>
  );
}

export default App;
