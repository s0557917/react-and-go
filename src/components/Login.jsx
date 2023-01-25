import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Input from "./form/Input";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setJWTToken } = useOutletContext(); 
    const { setAlertMessage } = useOutletContext(); 

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()

        if(email === "admin@example.com") {
            setJWTToken("abc")
            setAlertMessage("")
            navigate("/movies")
        } else {
            setAlertMessage("Invalid credentials!")
        }
    }

    return(
            <div className='w-full m-2 flex flex-col items-center'>
                <h2 className='px-2 text-2xl'>Login</h2>
                <hr className='border border-gray-300 w-full m-2'></hr>

                <form 
                    onSubmit={handleSubmit} 
                    className="w-2/5 m-2 p-2"
                >
                    <Input
                        title="Email Address"
                        type="email"
                        name="email"
                        placeholder="Type your email..."
                        onChange={(event) => setEmail(event.target.value)}
                        autoComplete="email-new"
                        className=" border border-gray-500 w-full my-2 p-1 rounded-md"
                    />
                    
                    <Input
                        title="Password"
                        type="password"
                        name="password"
                        placeholder="Type your password..."
                        onChange={(event) => setPassword(event.target.value)}
                        autoComplete="password-new"
                        className="border border-gray-500 w-full my-2 p-1 rounded-md"
                    />

                    <hr />

                    <div
                        className="flex justify-center mt-3"
                    >
                        <input 
                            type="submit"
                            className="text-xl px-3 py-1 rounded-sm text-white font-bold bg-green-500"
                            value="Login"
                        />
                    </div>

                </form>
            </div>
    )
}

export default Login