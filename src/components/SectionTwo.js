import React from 'react'
import { useForm } from '../Context/Context'
import './SectionTwo.css'

const SectionTwo = () => {

    const { formik: form } = useForm()
    const { guardianLabel, guardianDetails, email, emergencyNumber } = form.values
    console.log("second>>>>", guardianLabel, guardianDetails, email, emergencyNumber)

    return (
        <div className="section sectionOne">
            <div className="inputContainer">
                <label htmlFor="">Guardian Details</label>
                <div className='validationContainer'>
                    <div>
                        <select
                            name="guardianLabel"
                            value={guardianLabel}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                        // style={{ display: "block" }}
                        >
                            <option value="" label="guardianLabel">
                                Select option{" "}
                            </option>
                            <option value="label1" label="label1">
                                label1
                            </option>
                            <option value="label2" label="label2">
                                label2
                            </option>
                            <option value="label3" label="label3">
                                label3
                            </option>
                        </select>


                        <input
                            type="text"
                            name='guardianDetails'
                            value={guardianDetails}
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                        />
                    </div>
                    {form.errors.guardianLabel && form.touched.guardianLabel && <span>*{form.errors.guardianLabel}</span>}
                    {form.errors.guardianDetails && form.touched.guardianDetails && <span>*{form.errors.guardianDetails}</span>}
                </div>
            </div>
            <div className="inputContainer">
                <label htmlFor="">Email</label>
                <div className='validationContainer'>
                    <input
                        type="email"
                        name='email'
                        value={email}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                    />
                    {form.errors.email && form.touched.email && <span>*{form.errors.email}</span>}
                </div>
            </div>
            <div className="inputContainer">
                <label htmlFor="">Emergency Contact Number</label>
                <div className='validationContainer'>
                    <input
                        type="text"
                        name='emergencyNumber'
                        value={emergencyNumber}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                    />
                    {form.errors.emergencyNumber && form.touched.emergencyNumber && <span>*{form.errors.emergencyNumber}</span>}
                </div>
            </div>
        </div>

    )
}

export default SectionTwo