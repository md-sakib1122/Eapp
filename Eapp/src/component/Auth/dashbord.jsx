import { func } from "prop-types";
import { useNavigate } from "react-router-dom";
import auth from "./firebase2";
import {onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { Routes,Route } from "react-router-dom";

import { Outlet } from "react-router-dom";
function Dashbord(){
    
    const [state,setState]=useState('');
      

     const navigate=useNavigate();

    function handleClick(){

        if(state=='signedin'){
            //log out

            signOut(auth).then(() => {
               console.log("Sign out successfully")
              }).catch((error) => {
                console.log(error.message);
              });
        }
        else{
        navigate('/login');
        }
    }


    onAuthStateChanged(auth, (user) => {
        if (user) {
          setState('signedin');
          const uid = user.uid;
         
        } else {
            setState('signedout');

        }
      });

      let content;
      
      if(state=='signedin') {
      content='Logout'
      }
      else{
      content='SignUp';
      }
     
    
    

    
    return(
      <div>
         <button onClick={handleClick}  style={{
             padding:"8px",
             background:"#FFD814" , 
             border:"none",
             borderRadius:"5px",
             fontWeight:'bolder'
            }}>{content}</button>
            
           

       
      </div>
    );
}

export default Dashbord;