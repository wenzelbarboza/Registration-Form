import { useFormik } from "formik";
import { createContext, useContext, useReducer } from "react";
import * as yup from "yup"
import { number } from "yup/lib/locale";
import userReducer from "./Reducers";

const form = createContext()

export const Context = ({ children }) => {

    const [state, dispatch] = useReducer(userReducer, [])


    const onSubmit = async (values, actions) => {

        dispatch({
            type: "ADD_USER",
            payload: formik.values
        })

        await new Promise((resolve, reject) => setTimeout(resolve, 1000))
        actions.resetForm()
    }

    const schema = yup.object().shape({
        name: yup.string().max(15).required(),
        DOB: yup.date().required(),
        sex: yup.string().required(),
        mobile: yup.string().matches(/[0-9]{10,10}/, "10 digits required").min(10, "10 digits required")
            .max(10, "10 digits required"),
        IDType: yup.string(),
        IDValue: yup.string().matches(/[0-9]{12}/, "12 digits required").min(12, "12 digits required")
            .max(12, "12 digits required"),
        guardianLabel: yup.string(),
        guardianDetails: yup.string().max(15),
        email: yup.string().email("Enter a valid email"),
        emergencyNumber: yup.string().matches(/[0-9]{10}/, "10 digits required").min(10, "10 digits required")
            .max(10, "10 digits required"),
        address: yup.string().max(100, "should be less than 100 characters"),
        state: yup.string().max(15),
        city: yup.string().max(15),
        country: yup.string().max(15, "should be less than 15 characters"),
        pincode: yup.string().matches(/[0-9]{6}/, "6 digits required").min(6, "6 digits required")
            .max(6, "6 digits required"),
        occupation: yup.string().max(10, "should be less than 10 characters"),
        religion: yup.string(),
        maritalStatus: yup.string(),
        bloodGroup: yup.string(),
        nationality: yup.string().max(15, "should be less than 15 characters")
    })

    const initialValues = {
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
    }

    const formik = useFormik({
        initialValues,
        validationSchema: schema,
        onSubmit
    })

    return (
        <form.Provider value={{ formik, state, dispatch }} >{children}</form.Provider>
    )
}


export const useForm = () => useContext(form)