import { useRef } from "preact/hooks";
import { useEffect } from "preact/hooks";
import { useState } from "preact/hooks";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
let trns='';
function Scrool(){

    const [styles,setStyles]=useState('grid grid-flow-col overflow-x-scroll  snap-x scroll-smooth no-scrollbar gap-2 w-[424px]')
    const containerRef = useRef(null);
    const  targetRef = useRef(null);
    const [scrollWidth, setScrollWidth] = useState(0);
    const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
       
      const { scrollWidth } = containerRef.current;
      setScrollWidth(scrollWidth);
    }
    
    if (targetRef.current) {
        const {offsetWidth}=targetRef.current;
        setOffset(offsetWidth);
      }
      

    }, []);

   
    

    console.log(scrollWidth)
    console.log(offset)
    let x=offset;
    function Goleft(){
      
     containerRef.current.scrollLeft=x;

     x=x+offset;
       
     if(x+2*offset>=scrollWidth){
        x=0;
        setStyles('grid grid-flow-col overflow-x-scroll scroll-smooth snap-x  no-scrollbar gap-2 w-[424px] ')
        
     }
      
    }
  


    return(
      <div className="relative w-[424px]">
        <div onClick={Goleft} className="translate-y-1/2 absolute bottom-1/2  text-3xl bg-lime-500 rounded-full flex justify-center items-center left-2 text-white"><GoChevronLeft /></div>
        <div  ref={containerRef}  className={styles}>
                <div ref={ targetRef } className="border  border-solid border-black w-52 h-36 flex justify-center items-center rounded-lg snap-start">
                    <h1>i am heading 1</h1>
                </div>
                <div className=" border border-solid border-black w-52 h-36 flex justify-center items-center rounded-lg snap-start">
                    <h1>i am heading 2</h1>
                </div>
                <div className=" border border-solid border-black w-52 h-36 flex justify-center items-center rounded-lg snap-start">
                    <h1>i am heading 3</h1>
                </div>
                <div className=" border border-solid border-black w-52 h-36 flex justify-center items-center rounded-lg snap-start">
                    <h1>i am heading 4</h1>
                </div>
                <div className=" border border-solid border-black w-52 h-36 flex justify-center items-center rounded-lg snap-start">
                    <h1>i am heading 5</h1>
                </div>
                <div className=" border border-solid border-black w-52 h-36 flex justify-center items-center rounded-lg snap-start">
                    <h1>i am heading 6</h1>
                </div>
        </div>
        <div className=" absolute bottom-1/2 right-0  translate-y-1/2 text-3xl  text-3xl bg-lime-500 rounded-full flex justify-center items-center right-2 text-white "><GoChevronRight /></div>
    </div>    
    
    );
}

export default Scrool;
