import React from 'react'
import { useForm } from '../Context/Context'
import './SectionThree.css'

const SectionThree = () => {

    const { formik: form } = useForm()
    const { address, state, city, country, pincode, } = form.values


    return (
        <div className='section sectionThree'>
            <div className="inputContainer" >
                <label htmlFor="">Address</label>
                <div className='validationContainer'>
                    <input
                        type="text"
                        className='address'
                        name='address'
                        value={address}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                    />
                    {form.errors.address && form.touched.address && <span>*{form.errors.address}</span>}
                </div>
            </div>
            <div className="inputContainer">
                <label htmlFor="">state</label>
                <div className='validationContainer'>
                    <select
                        name="state"
                        value={state}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    >
                        <option value="" label="state">
                            Select a state{" "}
                        </option>
                        <option value="state1" label="state1">
                            state1
                        </option>
                        <option value="state2" label="state2">
                            state2
                        </option>
                        <option value="state3" label="state3">
                            state3
                        </option>
                    </select>
                    {form.errors.state && form.touched.state && <span>*{form.errors.state}</span>}
                </div>
            </div>
            <div className="inputContainer">
                <label htmlFor="">city</label>
                <div className='validationContainer'>
                    <select
                        name="city"
                        value={city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    >
                        <option value="" label="city">
                        </option>
                        <option value="city1" label="city1">
                            city1
                        </option>
                        <option value="city2" label="city2">
                            city2
                        </option>
                        <option value="city3" label="city3">
                            city3
                        </option>
                    </select>
                    {form.errors.city && form.touched.city && <span>*{form.errors.city}</span>}
                </div>
            </div>
            <div className="inputContainer">
                <label htmlFor="">country</label>
                <div className='validationContainer'>
                    <input
                        type="text"
                        name='country'
                        value={country}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                    />
                    {form.errors.country && form.touched.country && <span>*{form.errors.country}</span>}
                </div>
            </div>
            <div className="inputContainer">
                <label htmlFor="">pincode</label>
                <div className='validationContainer'>
                    <input
                        type="text"
                        name='pincode'
                        value={pincode}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                    />
                    {form.errors.pincode && form.touched.pincode && <span>*{form.errors.pincode}</span>}
                </div>
            </div>

        </div>
    )
}

export default SectionThree