import React from 'react'

const SectionTwo = () => {

    const form = useForm()
    const { guardianLabel, guardianDetails, email, emergencyNumber } = form.values
    console.log("second>>>>", guardianLabel, guardianDetails, email, emergencyNumber)

    return (
        <>
            <label htmlFor="">Guardian Details</label>
            <select
                name="guardianLabel"
                value={guardianLabel}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
            // style={{ display: "block" }}
            >
                <option value="" label="sex">
                    Select a color{" "}
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
                onChange={form.handleChange}
            />
            <input
                type="email"
                name='email'
                value={email}
                onChange={form.handleChange}
            />
            <input
                type="number"
                name='emergencyNumber'
                value={emergencyNumber}
                onChange={form.handleChange}
            />

        </>
    )
}

export default SectionTwo