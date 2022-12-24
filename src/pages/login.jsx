import { useContext, useState, useEffect } from "react";
import fireBaseContext from "../context/firebase";
import { Link, useNavigate } from "react-router-dom";
import { setDocumentTitle } from "../helpers/common"
import { DASHBOARD } from "../constants/routes"
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const { getAuth, createUserWithEmailAndPassword } = useContext(fireBaseContext)
    const navigator = useNavigate()
    const inInvalid = email ==="" || password === ""
    useEffect(() =>{
        setDocumentTitle("Login-Instagram")
    },[])
    const handleLogin = async(e) => {
        e.preventDefault()
        try {
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, email, password)
            navigator(DASHBOARD)
        } catch (error) {
            setEmail("")
            setPassword("")
            setError(error.message)
        }
    }
    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5" >
                <img src="/images/iphone-with-profile.jpg" alt="iphone with profile screen"></img>
            </div>
            <div className="flex flex-col  w-2/5" >
                <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
                    <h1 className="flex justify-center w-full">
                        <img src="/images/logo.png" alt="instagram logo" className="mt-2 w-6/12"></img>
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
                    <form onSubmit={handleLogin} method="post">
                         <input value={email} type="text" placeholder="Email address" aria-label="Enter your email address" className="text-sm text-gray-base
                         w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                         onChange={(e) => setEmail(e.target.value)}
                         ></input>
                         <input value={password} type="password" placeholder="Password" aria-label="Enter your password" className="text-sm text-gray-base
                         w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                         onChange={(e) => setPassword(e.target.value)}
                         ></input>
                         <button
                         type="submit"
                         className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${inInvalid && "opacity-50"}`}
                         > Log in
                         </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border
                    border-gray-primary rounded">
                <p className="text-sm">Don't have account? {` `}
                    <Link to="/sign-up" className="font-bold text-blue-medium">Sign up</Link>
                </p>
               </div>
            </div>
        </div>
    ) 
}
export default Login;