
import NavComponent from './navComponent';
import SearchBox from './searchBox';
import { useState } from 'preact/hooks';

function Nav(){
   const [searchBar,handleBar]=useState(false);
  
   function toggleBar(x){
     console.log("hi")
     handleBar(x);
   }

    return(
     <>

      <div className=' bg-[#121212]    flex justify-between items-center'>
          {
           searchBar? <SearchBox Onclick={toggleBar} />:<NavComponent Onclick={toggleBar}/>
          }
      </div>


       <hr />      
    </>
    )
}

export default Nav;