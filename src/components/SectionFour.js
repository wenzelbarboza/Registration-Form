import React from 'react'
import { useForm } from '../Context/Context'
import './SectionFour.css'

const SectionFour = () => {

    const { formik: form } = useForm()
    const { occupation, religion, maritalStatus, bloodGroup, nationality } = form.values

    return (
        <div className='section sectionFour'>
            <div className="inputContainer">
                <label htmlFor="">Occupation</label>
                <div className='validationContainer'>
                    <input
                        type="text"
                        name='occupation'
                        value={occupation}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                    />

                    {form.errors.occupation && form.touched.occupation && <span>*{form.errors.occupation}</span>}
                </div>
            </div>
            <div className="inputContainer">
                <label htmlFor="">Religion</label>
                <div className='validationContainer'>

                    <select
                        name="religion"
                        value={religion}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    // style={{ display: "block" }}
                    >
                        <option value="" label="Religion">
                            Select a Religion{" "}
                        </option>
                        <option value="Religion1" label="Religion1">
                            Religion1
                        </option>
                        <option value="Religion2" label="Religion2">
                            Religion2
                        </option>
                        <option value="Religion3" label="Religion3">
                            Religion3
                        </option>
                    </select>
                    {form.errors.religion && form.touched.religion && <span>*{form.errors.religion}</span>}
                </div>
            </div>
            <div className="inputContainer">
                <label htmlFor="">Marital Status</label>
                <div className='validationContainer'>

                    <select
                        name="maritalStatus"
                        value={maritalStatus}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    // style={{ display: "block" }}
                    >
                        <option value="" label="maritalStatus">
                            Select a Marital Status{" "}
                        </option>
                        <option value="single" label="single">
                            single
                        </option>
                        <option value="married" label="married">
                            married
                        </option>
                        <option value="devorced" label="devorced">
                            devorced
                        </option>
                    </select>
                    {form.errors.maritalStatus && form.touched.maritalStatus && <span>*{form.errors.maritalStatus}</span>}
                </div>
            </div>
            <div className="inputContainer">
                <label htmlFor="">Blood Group</label>
                <div className='validationContainer'>

                    <select
                        name="bloodGroup"
                        value={bloodGroup}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    // style={{ display: "block" }}
                    >
                        <option value="" label="select">
                        </option>
                        <option value="A" label="A">
                            A
                        </option>
                        <option value="B" label="B">
                            B
                        </option>
                        <option value="O" label="O">
                            O
                        </option>
                    </select>
                    {form.errors.bloodGroup && form.touched.bloodGroup && <span>*{form.errors.bloodGroup}</span>}
                </div>
            </div>
            <div className="inputContainer">
                <label htmlFor="">Nationality</label>
                <div className='validationContainer'>

                    <input
                        type="text"
                        name='nationality'
                        value={nationality}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                    />
                    {form.errors.nationality && form.touched.nationality && <span>*{form.errors.nationality}</span>}
                </div>
            </div>
        </div>
    )
}

export default SectionFour