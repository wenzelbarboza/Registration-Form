import React from 'react'
import { useForm } from '../Context/Context'

const SectionThree = () => {

    const form = useForm()
    const { address, state, city, country, pincode, } = form.values
    console.log("third>>>>", address, state, city, country, pincode)

    return (
        <div className='sectionThree'>
            <label htmlFor="">Address</label>
            <input
                type="text"
                name='address'
                value={address}
                onChange={form.handleChange}
            />
            <label htmlFor="state"></label>
            <select
                name="state"
                value={state}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
            // style={{ display: "block" }}
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
            <label htmlFor="">city</label>
            <select
                name="city"
                value={city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
            // style={{ display: "block" }}
            >
                <option value="" label="city">
                    Select a city{" "}
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
            <label htmlFor="">country</label>
            <input
                type="text"
                name='country'
                value={country}
                onChange={form.handleChange}
            />
            <label htmlFor="">pincode</label>
            <input
                type="number"
                name='pincode'
                value={pincode}
                onChange={form.handleChange}
            />

        </div>
    )
}

export default SectionThree