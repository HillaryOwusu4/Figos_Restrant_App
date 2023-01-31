import React, { useState } from "react";

const Menusearch = ({Allfetched,setfilterMenu,icons,setValue,Value}:any) => {
    const [searchicon,setsearchicon] = useState(true)
    const [Closeicon,setCloseicon] = useState(false)

    const OnClose = () =>{
        setsearchicon(true)
        setCloseicon(false)
        setValue('')
    }
    const Onsearchicon = () =>{
        setsearchicon(false)
        setCloseicon(true)
    }
    const handleKeyDown = (event:any) => {
        if (event.key === 'Enter') {
          handleClick();
          setCloseicon(true)
          setsearchicon(false)
        }
       
      };

    

      const handleClick=()=>{
        const newData = Allfetched.filter((item:any)=>{
            return item.Name.toLowerCase().includes(Value.toLowerCase())
           })
         
           setfilterMenu(newData)
      }


     const inputHandler:React.ChangeEventHandler<HTMLInputElement> = (event) =>{
        setValue(event.target.value)
       
     }

     const SearchHandler = () => {
        const newData = Allfetched.filter((item:any)=>{
            return item.Name.toLowerCase().includes(Value.toLowerCase())
           })
         
           setfilterMenu(newData)
     }
    



    return (<div className="w-[50%]  h-[60%] border-[2px] bg-transparent text-white border-red-500 pt-1 rounded-full pl-[26px]" onClick={SearchHandler}>
       {searchicon && <i className='fa-solid fa-magnifying-glass' onClick={Onsearchicon} ></i>}
       {Closeicon && <i className='fa-solid fa-xmark' onClick={OnClose} ></i>}

          
        <input className='w-[70%] h-[90%]  p-2  bg-transparent  outline-none' onChange={inputHandler} value={Value} placeholder='Search' type="text" name="Search" id="Search" onKeyPress={handleKeyDown} />
    </div>);
}

export default Menusearch;