import classes from '../Maincomponent/popularDishes.module.css'
import Menusearch from './MenuSearchbar';
import Searchbar from './Searchbar';
import Link from 'next/link';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/CartFeature';
import Image from 'next/image';
const Menulist = (probs:any) => {

    const dispatch = useDispatch()
    const [inputvalue,setinputvalue]=useState('1')

     const onchangeHandler:React.ChangeEventHandler<HTMLInputElement> = (event)=>{

        setinputvalue(event.target.value)
     }

 

    const [filterMenu, setfilterMenu] = useState([])
    const [Value, setValue] = useState('')

    const originaldata = Value === '' ? probs.Allfetched : filterMenu

    return (<div className="w-full h-full">
        <div className="w-full flex h-[10%]">
            <div className="w-[50%] font-semibold text-white flex items-center text-[22px] h-full">
                <p>All categories</p>
            </div>
            <div className="w-[50%] h-full flex items-center justify-end ">
                <Menusearch Allfetched={probs.Allfetched} setfilterMenu={setfilterMenu} Value={Value} setValue={setValue} />
            </div>
        </div>
        <div className={`${classes.parent} w-full  gap-3 grid grid-cols-3 h-[90%]  `}>

            {
                originaldata.map((item:any, index:number) => {
            
                    const additemHandler = (event:any) => {
                        event.preventDefault()
                      
                       dispatch(cartActions.Additems({
                       id:item.id,
                       Name:item.Name,
                       Price:item.Price,
                       Value:Number(inputvalue)
                       }))
                   }
               

                    return (
   
                            <div key={index} className="w-full   h-[17rem] flex justify-center rounded-md  bg-gradient-to-b from-zinc-800 to-black ">
                                
                                <div className="w-[90%] relative h-[100%] text-white ">
                                <Link href={`/Menudetails/` + item.id} key={index + 'hey'} >
                                    <div className="w-[100%]  flex justify-center h-[65%] ">
                                        <Image src={item.image} alt='' width={130} height={100} className="w-[55%]  h-[100%]" />
                                        <div className="w-[10%] hover:bg-red-900 absolute flex mt-2 justify-center rounded-full text-sm items-center right-[10px] bg-red-600 h-[10%]">
                                            <Link href='/cartitems' >   <i className={item.cart}></i></Link>
                                        </div>
                                    </div>
                                    <div className="w-full h-[19%] flex items-center  justify-center font-semibold ">{item.Name}</div>
                                    </Link>
                                    <div className="w-full flex justify-between h-[12%] ">
                                        <input type="number" name="text" id="text" max='6' min='1' value={inputvalue} onChange={onchangeHandler} className='bg-zinc-800 p-1 rounded-sm 
                        '/>
                                        <div className="w-[20%] h-full flex items-center font-semibold ">{`${item.Price.toFixed(2)}$`}</div>

                                        <div className="w-[9%] hover:bg-red-900 h-[80%] flex justify-center items-center rounded-full bg-red-600" onClick={additemHandler}>
                                            <i className={item.Add} ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        

                    )
                })
            }
        </div>
    </div>);
}

export default Menulist;