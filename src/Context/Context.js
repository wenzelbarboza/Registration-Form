import { useFormik } from "formik";
import { createContext, useContext } from "react";
import * as yup from "yup"
import { number } from "yup/lib/locale";


const form = createContext()

export const Context = ({ children }) => {
    console.log(yup.string)

    const schema = yup.object().shape({
        name: yup.string().max(10),
        DOB: yup.date().required(),
        sex: yup.string().required(),
        mobile: yup.number().min(10, "10 digits required").max(10, "10 digits required").required(),
        IDType: yup.string().required(),
        IDValue: yup.number().required(),
        guardianLabel: yup.string().required(),
        guardianDetails: yup.string().required(),
        email: yup.string().email("enter a valid email"),
        emergencyNumber: yup.number().min(10, "10 digits required").max(10, "10 digits required").required(),
        address: yup.string().max(100, "should be lessthan 100 characters"),
        state: yup.string().required(),
        city: yup.string().required(),
        country: yup.string().required(),
        pincode: yup.number().min(10, "should contain 6 digits").max(10, "should contain 6 digits").required(),
        occupation: yup.string().max(10),
        religion: yup.string().required(),
        maritalStatus: yup.string().required(),
        bloodGroup: yup.string().required(),
        nationality: yup.string().required()

    })

    const formik = useFormik({
        initialValues: {
            name: "",
            DOB: "",
            sex: "",
            mobile: "",
            IDType: "",
            IDValue: "",
            guardianLabel: "",
            guardianDetails: "",
            email: "",
            emergencyNumber: "",
            address: "",
            state: "",
            city: "",
            country: "India",
            pincode: "",
            occupation: "",
            religion: "",
            maritalStatus: "",
            bloodGroup: "",
            nationality: "India"
        },
        validationSchema: schema,
    })

    return (
        <form.Provider value={formik} >{children}</form.Provider>
    )
}


export const useForm = () => useContext(form)