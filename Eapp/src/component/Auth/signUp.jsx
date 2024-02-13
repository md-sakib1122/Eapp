import { useState } from "react";
import './login.css'
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase2";

function Signup(){
    const [mail,setmail]=useState('');
    const [pass,setpass]=useState('');
    
    const navigateUp=useNavigate();
    const gohome=useNavigate();

        function gologin(){
            navigateUp('/login');
        }

        function handleSignup(){

            createUserWithEmailAndPassword(auth, mail, pass)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              gohome('/');
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
            });

        }

    return(
        <div className="background">
           <div className="semibackground">
            <div className="container">
                <h1>Sign Up</h1>
                <input type="text" placeholder="Your first and last name" />

                <input value={mail} type="password" onChange={(e)=>{ setmail(e.target.value)}} placeholder="Your mail address" />
                <input value={pass} type="password" onChange={(e)=>{ setpass(e.target.value)}} placeholder="Create a password" />
                <button onClick={handleSignup}  >Sign-Up</button>

                <p style={{color:"white",opacity:0.5}}>Already have an account?</p>

                <button onClick={gologin} className="signin">Sign-In now</button>
            </div>
            
          </div> 
        </div>
    );
}

export default Signup;