import React from 'react'
import { useForm } from '../Context/Context'

const SectionFour = () => {

    const form = useForm()
    const { occupation, religion, maritalStatus, bloodGroup, nationality } = form.values
    console.log("third>>>>", occupation, religion, maritalStatus, bloodGroup, nationality)

    console.log(form.errors)

    return (
        <div className='sectionFour'>
            <label htmlFor="">Occupation</label>
            <input
                type="text"
                name='occupation'
                value={occupation}
                onChange={form.handleChange}
            />
            <label htmlFor="">Religion</label>
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
            <label htmlFor="">Marital Status</label>
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
            <label htmlFor="">Blood Group</label>
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
            <label htmlFor="">Nationality</label>
            <input
                type="text"
                name='nationality'
                value={nationality}
                onChange={form.handleChange}
            />
        </div>
    )
}

export default SectionFour