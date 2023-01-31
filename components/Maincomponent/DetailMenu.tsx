import {useRouter} from "next/router";
import Image from "next/image";
import React, { useState } from "react";
import { cartActions } from "../store/CartFeature";
import { useDispatch } from 'react-redux'
const Detailmenu = ({Menudetail}:any) => {
  const [inputvalue,setinput]=useState('1')
  const router = useRouter()
  
  const dispatch = useDispatch()
  const  InputHandler:React.ChangeEventHandler<HTMLInputElement> = (event)=>{

    setinput(event.target.value)
  }
  // const router = useRouter()
  const back =()=>{
    router.back()
  }
  const additemHandler = (event:React.MouseEvent<HTMLButtonElement>) => {

    event.preventDefault()
    dispatch(cartActions.Additems({
        id: Menudetail.id,
        Name: Menudetail.Name,
        Price: Menudetail.Price,
        Value: Number(inputvalue)
    }))
}
    return (  <div className="w-full text-white h-[60%] flex ">
    <div className="w-[50%] h-full justify-center items-center flex ">
      <div className="w-[80%] flex flex-col   justify-center  h-[80%]">
       <p className="text-[48px] w-full font-semibold h-[20%]">{Menudetail.Name}</p>
      
       <div className="w-full h-[10%] flex justify-between ">
       <p className="font-bold text-[25px]">{`${Menudetail.Price.toFixed(2)}$`}</p>
       <input type="number" name="text" id="text" max='6'  min='1' value={inputvalue}
       onChange={InputHandler} className='bg-zinc-800 p-1 rounded-sm'/>
       </div>
       
     <div className="w-full flex items-center justify-between h-[15%] ">
    
     <button className="w-[30%] h-[70%] rounded-md hover:bg-red-800 bg-red-500 mr-6" onClick={additemHandler}>Add to cart</button>
     <button className="w-[30%] h-[70%] border-2 border-red-500 rounded-md
     " onClick={back}>Back</button>
     </div>
      </div>
    </div>
    <div className="w-[50%] h-full justify-center items-center flex ">
      <Image width={400} height={200} src={Menudetail.image} alt="" />
    </div>
  </div>  );
}
 
export default Detailmenu;