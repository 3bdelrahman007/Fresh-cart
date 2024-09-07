import React, { useContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/UserContext';



export default function Login() {
    const [errorMsg, setErrorMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const {setToken} = useContext(userContext)

    const schema = Yup.object().shape({
        "email" : Yup.string().required('email is required').email('email is not valid'),
        "password" : Yup.string().required('password is required').matches(/^[a-zA-z].{5,}/, 'must be more than 5 chars'),
    })

    const formik = useFormik({
        initialValues : {
            "email" : "",
            "password" : "",
        },
        onSubmit : handleSubmit,
        validationSchema : schema
    })

    async function handleSubmit(values){
        setIsLoading(true)
        try {
            const {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
            if(data.message == 'success'){
                navigate('/')
                setToken(data.token)
            }
        } catch (error) {
            setErrorMsg(error.response.data.message)
            console.log(error.response.data.message);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <h1>Login</h1>
            {errorMsg ? <div className="p-4 mb-4 mt-3 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                {errorMsg}
            </div> : null}
            
            <form onSubmit={formik.handleSubmit} className="mx-auto mt-10">
                <div className="relative z-0 w-full mb-5 group">
                    <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="email" className="peer-focus:font-medium  absolute text-sm text-gray-500 dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    {formik.errors.email && formik.touched.email ?   <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                {formik.errors.email}
                                            </div> : null}
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="password" className="peer-focus:font-medium  absolute text-sm text-gray-500 dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    {formik.errors.password && formik.touched.password ?   <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                                {formik.errors.password}
                                            </div> : null}
                </div>
                <button disabled = {isLoading} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-slate-500"> {isLoading ? <FaSpinner className='animate-spin' /> : 'Submit'} </button>
            </form>
        </>
    )
}
