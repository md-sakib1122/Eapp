import { GoListUnordered ,GoX} from "react-icons/go";
function SearchBox({Onclick}){

    function expandSearch(){
        Onclick(false);
       
    }
   
   return(

    <div className=" w-full h-10">
       <input className="bg-[#1F1F1F] h-full w-full text-white  px-2" placeholder="Search Product" type="text" />
       <div onClick={expandSearch} className="text-white absolute top-2 right-4 text-2xl cursor-pointer">
         <GoX/>
        </div>
    </div> 
     
   )
}

export default SearchBox;