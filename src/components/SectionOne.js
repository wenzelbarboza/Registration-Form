import React from 'react'
import { useForm } from '../Context/Context'


const SectionOne = () => {
    const form = useForm()
    const { name, DOB, sex, mobile, IDType, IDValue } = form.values
    console.log(name, DOB, sex, mobile, IDType, IDValue)
    return (
        <>
            <label htmlFor="">name</label>
            <input
                type="text"
                name='name'
                value={name}
                onChange={form.handleChange}
            />
            <label htmlFor="">DOB</label>
            <input
                type="date"
                name='DOB'
                value={DOB}
                onChange={form.handleChange}
            />
            <label htmlFor="">sex</label>
            <select
                name="sex"
                value={sex}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
            // style={{ display: "block" }}
            >
                <option value="" label="sex">
                    Select a color{" "}
                </option>
                <option value="male" label="male">
                    male
                </option>
                <option value="female" label="female">
                    female
                </option>
                <option value="other" label="other">
                    other
                </option>
            </select>
            <label htmlFor="">mobile number</label>
            <input
                type="number"
                name='mobile'
                value={mobile}
                onChange={form.handleChange}
            />
            <label htmlFor="">government ID</label>
            <select
                name="IDType"
                value={IDType}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
            // style={{ display: "block" }}
            >
                <option value="" label="IDType">
                    Select a color{" "}
                </option>
                <option value="type1" label="type1">
                    type1
                </option>
                <option value="type2" label="type2">
                    type2
                </option>
                <option value="type3" label="type3">
                    type3
                </option>
            </select>
            <input
                type="number"
                name='IDValue'
                value={IDValue}
                onChange={form.handleChange}
            />
        </>
    )
}

export default SectionOne