import PopularDishes from "./PopularDishes";
import Link from "next/link";
import Searchbar from "./Searchbar";
import Orderedsucess from "./Orderedsucess";
import React, { useState } from "react";
import { getStaticProps } from "../../pages";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/CartFeature";
const LandingPage = (props) => {
    const toggle = useSelector(state => state.Cart.toggle)
    console.log('toggle',toggle)
    const dispatch = useDispatch()
const [filteredData1,setfilteredData]= useState(props.Popular_Dishes)

const HideOrdedHandler=()=>{
    dispatch(cartActions.HideToggle())
        }


    return (<div className="w-[90%]    h-[100%]  " onClick={HideOrdedHandler}>
        <div className="w-full h-[50%] flex ">
            <div className="w-[50%] h-[100%] flex justify-end items-center  ">
                <div className="w-[100%] h-[80%] ">
                    <p className="text-[60px] flex items-center text-white justify-center font-bold leading-[60px] font-['Righteous', cursive] w-full  h-[40%] ">We serve the taste you love</p>
                    <p className='w-[80%] flex items-center text-justify tracking-tight text-gray-300  justify-center h-[25%] '>This is the type of resturant that typically serves food and drinks,in addition to light refreshment such as baked goods.The term comes from a french word meaning food</p>
                    <div className="w-[70%]  flex items-center h-[20%]">
                       <Link href='/Menu'  className='w-[40%] mr-7 h-[60%] flex justify-center items-center text-white  rounded-full font-semibold bg-red-700 hover:shadow-lg hover:shadow-yellow-400'> <button >Explore foods</button></Link>
                       <Searchbar setfilteredData={setfilteredData} Popular_Dishes={props.Popular_Dishes}/>
                    </div>

                </div>
            </div>
            <div className="w-[50%] h-[100%] flex  ">
                <div className="w-[80%] relative
             h-full justify-start flex items-center  ">
             {toggle && <div className='absolute  top-[-10%] left-[50%] w-[60%] h-[15%]' >
                <Orderedsucess/>
              </div>}
                    <img src="/Images/Captureres-removebg-preview.png" className='w-full object-contain h-[80%]' alt="" />
                    {/* <img src="/Images/Snip-removebg-preview.png" alt="" className='w-[60px] bottom-[40px] left-10 absolute h-[60px]'/> */}
                </div>
                <div className="w-[20%] h-full flex items-center justify-center ">
                    <div className="w-[100%] h-[80%] flex  flex-col items-end justify-around ">
                        {
                           props.Categories.map((items, index) => {

                                return (
                                    <Link href={`/Menu/` + items.id} className='w-[90%] hover:translate-x-6 hover:duration-1000  hover:ease-in-out h-[9%]' key={index + '2'}>
                                        <div  className="w-full hover:shadow-lg shadow-lg shadow-gray-900 hover:shadow-neutral-600 h-full flex justify-center items-center rounded-full bg-white" key={index + '12'}>
                                            <div className="w-[30%] h-[90%] relative ">

                                                <img src={items.image} />
                                            </div>
                                            <div className="w-[60%] flex justify-center font-bold text-sm items-center h-[90%] ">{items.Name}</div>
                                        </div>
                                     </Link>
                                )
                            })
                        }
                        </div>
                </div>

            </div>
        </div>
        <div className="w-full h-[50%] ">
            <PopularDishes Popular_Dishes={props.Popular_Dishes} filteredData={filteredData1} parent='parent' />
        </div>
    </div>);
}

export default LandingPage;


