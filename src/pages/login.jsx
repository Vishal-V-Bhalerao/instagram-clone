import { useContext, useState, useEffect } from "react";
import fireBaseContext from "../context/firebase";
import { useNavigate } from "react-router-dom";
import { setDocumentTitle } from "../helpers/common"
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const { fireabase } = useContext(fireBaseContext)
    const navigator = useNavigate()

    useEffect(() =>{
        setDocumentTitle("Login-Instagram")
    },[])

    return (
        <div className="container flex mx-auto max-w-screen-md items-center">
            <h2>Login page</h2>
        </div>
    ) 
}
export default Login;