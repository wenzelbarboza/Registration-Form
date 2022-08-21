import './App.css';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import { useForm } from './Context/Context';


function App() {
  const { formik: form, state, dispatch } = useForm()

  const submitHandler = (e) => {
    if (Object.keys(form.errors).length) return
    console.log('submit clicked')

  }

  const cancelHandler = (e) => {
    console.log("cancle clicked");
  }

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
          <button onClick={cancelHandler} className='btn cancel'>CANCEL</button>
          <button onClick={form.handleSubmit} className='btn submit'>SUBMIT</button>
        </div>
      </div>

      <div className="tableContainer">
        <table>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Sex</th>
            <th>Mobile</th>
            <th>ID Type</th>
            <th>ID</th>
            <th>Guardian</th>
            <th>Guardian Name</th>
            <th>Email</th>
            <th>Emergency Contact Number</th>
            <th>Address</th>
            <th>State</th>
            <th>City</th>
            <th>Country</th>
            <th>Pincode</th>
            <th>Occupation</th>
            <th>Religion</th>
            <th>Marital Status</th>
            <th>Blood Group</th>
            <th>Nationality</th>
          </tr>

          {state.map(user => {
            return (
              <tr>
                <td>{user.name || "NA"}</td>
                <td>{user.DOB || "NA"}</td>
                <td>{user.sex || "NA"}</td>
                <td>{user.mobile || "NA"}</td>
                <td>{user.IDType || "NA"}</td>
                <td>{user.IDValue || "NA"}</td>
                <td>{user.guardianLabel || "NA"}</td>
                <td>{user.guardianDetails || "NA"}</td>
                <td>{user.email || "NA"}</td>
                <td>{user.emergencyNumber || "NA"}</td>
                <td>{user.address || "NA"}</td>
                <td>{user.state || "NA"}</td>
                <td>{user.city || "NA"}</td>
                <td>{user.country || "NA"}</td>
                <td>{user.pincode || "NA"}</td>
                <td>{user.occupation || "NA"}</td>
                <td>{user.religion || "NA"}</td>
                <td>{user.maritalStatus || "NA"}</td>
                <td>{user.bloodGroup || "NA"}</td>
                <td>{user.nationality || "NA"}</td>

              </tr>
            )

          })}
        </table>
      </div>
    </div>
  );
}

export default App;
