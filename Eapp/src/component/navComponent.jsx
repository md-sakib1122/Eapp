import React from 'react';
import { FaTruckMoving } from "react-icons/fa";
import { GoListUnordered ,GoX} from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { IoMdSearch } from "react-icons/io";
import {Link} from 'react-router-dom';
import './nav.css'
import {onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from './Auth/firebase2';
import { useState } from 'preact/hooks';
import { st1,st2 } from './customcss';

function NavComponent({Onclick}){

    const [show ,setShow] = useState(false);
    const [state,setState]=useState('');
    const home=useNavigate();

    function goHome(){
       home('/');
    }

 
    const showBar=()=>{
      setShow(true);
 
    }
 
    const hideBar=()=>{
     setShow(false);
   }
 
   let left=st1;
       
   if(show){
     left=st2;
   }
 


   //.....for signupp......
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


    function expandSearch(){
        Onclick(true);
       
    }
   


    return(
        <>
         <div className='flex gap-4 my-1.5 ml-3'>
              <div onClick={showBar} className=' text-white text-3xl cursor-pointer md:hidden' >
                  < GoListUnordered />
              </div>

              <div  className=' rounded-md bg-[#E2B616] w-16  flex justify-center items-center'>
                <h1 onClick={goHome}  className="font-bold cursor-pointer ">ShopY</h1>
              </div>

              <div  onClick={expandSearch}  className=' text-white  flex justify-center items-center  text-3xl cursor-pointer '>
                  <IoMdSearch /> 
              </div>
          </div>
           <div className={left}>
              <div onClick={hideBar} className=' cursor-pointer  bg-[#121212] *:text-white text-3xl py-2 w-full flex  justify-end px-4 md:hidden'>
                < GoX />
              </div>

              <ul className='text-white w-full flex flex-col gap-4 pt-6 md:flex-row md:pt-0  ' >
                <li className=' flex justify-center items-center hover:bg-[#374151] w-full md:rounded-lg md:h-8'><Link to='/'>Home</Link></li>
                <li className=' flex justify-center items-center hover:bg-[#374151] w-full md:rounded-lg md:h-8'><Link to='product'>Product</Link></li>
                <li className=' flex justify-center items-center hover:bg-[#374151] w-full md:rounded-lg md:h-8'><Link to='/about'>About</Link></li>
                <li className=' flex justify-center items-center hover:bg-[#374151] w-full md:rounded-lg md:h-8'><Link to='/contact'>Contact</Link></li>
              </ul>
           </div>

           <div className='mr-4 h-8 hover:bg-sky-700 rounded-md flex justify-center items-center'>
              <button onClick={handleClick}  style={{
                  padding:"3px",
                  color:"white",
                  border:"none",
                  borderRadius:"5px",
                  fontWeight:'bolder',
                  }}>{content}</button>
           </div>

        </>
    );
}

export default NavComponent