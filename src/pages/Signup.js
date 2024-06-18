import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import React,{useEffect,useState} from "react";

export default function Signup(props) {
    const navigate=useNavigate();
    const [Status,setStatus]=useState(null)
    const { register, control, handleSubmit,formState} = useForm();
    const { errors }= formState

    useEffect(() => {
        
        if(Status==="Successful"){
            navigate('/login')
        }
    }, [Status,navigate])
    
    const onSubmit = (data) => {
        console.log( data)  
        props.showAlert("Account creation successful","good")
        setStatus("Successful")
    }

    return (
        <>
           
            <section className="bg-gray-50 dark:bg-gray-900 h-full ">
                <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-[90%] lg:py-0 ">
                    <a
                        href="/#"
                        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                    >
                        <img
                            className="w-8 h-8 mr-2"
                            src="/logo.jpg"
                            alt="logo"
                        />
                        InstiOLX
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                            <div className="flex justify-between items-center ">
                                
                            <div className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </div>
                            <div>
                                <button onClick={props.toggleMode} className="border p-2 dark:text-white dark:border-[#555756] rounded-lg">{props.mode}</button>
                            </div>
                            </div>
                            <form className="space-y-4 md:space-y-6" action="/#" onSubmit={handleSubmit(onSubmit)} noValidate>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                        {...register("email", {
                                            pattern: {
                                                value: /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                                                message: "Invalid email format",},
                                            required: "requires email"
                                            })}
                                    />
                                    <p className="text-red-500">{errors.email?.message}</p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="username"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Roll No.
                                    </label>
                                    <input
                                        type="Text"
                                        name="username"
                                        id="username"
                                        placeholder="Name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                        {...register("username", {
                                            required: "requires Username",
                                            minLength: 4
                                        })}
                                    />
                                    <p className="text-red-500">{errors.username?.message}</p>
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        {...register("password", {
                                            required: "requires password",
                                            minLength: 8
                                        })}
                                    />
                                    <p className="text-red-500">{errors.password?.message}</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="terms"
                                            aria-describedby="terms"
                                            type="checkbox"
                                            className="w-4 h-4 border  border-gray-300 rounded bg-gray-50 focus:ring-3 "
                                            {...register("Terms", {
                                                required: "Agreement is required"
                                            })}
                                        />
                                        
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="terms"
                                            className="font-light text-gray-500 dark:text-gray-300"
                                        >
                                            I accept the{" "}
                                            <a
                                                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                                href="/#"
                                            >
                                                Terms and Conditions
                                            </a>
                                        </label>
                                        <p className="text-red-500">{errors.Terms?.message}</p>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full dark:text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border dark:bg-primary-600 dark:hover:bg-[#111827] dark:focus:ring-primary-800 dark:border dark:border-[#45464b]"
                                >
                                    Create an account
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account?{" "}
                                    <Link
                                        to="/Login"
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Login here
                                    </Link>
                                </p>
                            </form>
                            <DevTool control={control} />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
