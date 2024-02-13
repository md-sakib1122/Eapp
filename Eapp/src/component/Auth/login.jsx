import { useState } from "react";
import './login.css'
import { useNavigate } from "react-router-dom";
import auth from "./firebase2";
import {signInWithEmailAndPassword } from "firebase/auth";

function Login(){
    const [mail,setmail]=useState('');
    const [pass,setpass]=useState('');
    const [prompt,setprompt]=useState('');

    const navigateUP = useNavigate();
    const navigateHome = useNavigate();
    const navigate3 = useNavigate();
     function GoSignup(){
        navigateUP('/signup');
     }

    function handleLogin(){
    signInWithEmailAndPassword(auth, mail, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigateHome('/');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setprompt('wrong pass');
  });
}
 
    
  

    return(
      
      
        <div className="background">
           <div className="semibackground">
            <div className="container w-5/12 ">
                <h1>Sign In</h1>
                <input value={mail} type="text" onChange={(e)=>{ setmail(e.target.value)}} className=" w-72" />
                <input value={pass} type="password" onChange={(e)=>{ setpass(e.target.value)}} className=" w-72" />
                 {prompt}
                <button onClick={handleLogin} className=" w-72" >Login</button>
                <p  style={{color:"white",cursor:"pointer"}}>Forgot password?</p>
                <button onClick={GoSignup} className="signin w-72">New Member?</button>
               

            </div>

          </div> 
        </div>
       
    );
}

export default Login;