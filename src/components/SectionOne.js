import React from 'react'
import { useForm } from '../Context/Context'
import './SectionOne.css'


const SectionOne = () => {
    const { formik: form } = useForm()
    const { name, DOB, sex, mobile, IDType, IDValue } = form.values
    console.log(name, DOB, sex, mobile, IDType, IDValue)
    return (
        <div className='section sectionOne'>
            <div className="inputContainer">
                <label htmlFor="">name</label>
                <div className='validationContainer'>
                    <input
                        type="text"
                        className='name'
                        name='name'
                        value={name}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                    />
                    {form.errors.name && form.touched.name && <span>*{form.errors.name}</span>}
                </div>
            </div>
            <div className="inputContainer">
                <label htmlFor="">DOB</label>
                <div className='validationContainer'>
                    <input
                        type="date"
                        name='DOB'
                        value={DOB}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                    />

                    {form.errors.DOB && form.touched.DOB && <span>*{form.errors.DOB}</span>}
                </div>
            </div>
            <div className="inputContainer">
                <label htmlFor="">sex</label>
                <div className='validationContainer'>
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
                    {form.errors.sex && form.touched.sex && <span>*{form.errors.sex}</span>}
                </div>
            </div>
            <div className="inputContainer">
                <label htmlFor="">mobile number</label>
                <div className='validationContainer'>
                    <input
                        type="text"
                        name='mobile'
                        value={mobile}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                    />
                    {form.errors.mobile && form.touched.mobile && <span>*{form.errors.mobile}</span>}
                </div>
            </div>

            <div className="inputContainer">
                <label htmlFor="">government ID</label>
                <div className='validationContainer'>
                    <div>
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
                            type="text"
                            name='IDValue'
                            className='idValue'
                            value={IDValue}
                            onBlur={form.handleBlur}
                            onChange={form.handleChange}
                        />
                    </div>
                    {form.errors.IDValue && form.touched.IDValue && <span>*{form.errors.IDValue}</span>}
                    {form.errors.IDType && form.touched.IDType && <span>*{form.errors.IDType}</span>}

                </div>
            </div>
        </div>

    )
}

export default SectionOne