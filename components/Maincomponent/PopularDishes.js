import classes from '../Maincomponent/popularDishes.module.css'
import Link from 'next/link'
import PopularDetails from './PopularDetails';

import { useRouter } from "next/router";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../store/ProductsFeature';
import { useSelector } from 'react-redux';
const PopularDishes = ({ Popular_Dishes, filteredData }) => {
const filteredData1 =useSelector(state=>state.Products.items)

    const router = useRouter()
    const dispatch = useDispatch();

    const scrolleft = () => {
        const leftitem = document.getElementsByClassName('parent')[0]
        leftitem.scrollLeft = Number(leftitem.scrollLeft) - 100
    }
    const scrolright = () => {
        const leftright = document.getElementsByClassName('parent')[0]
        leftright.scrollLeft = Number(leftright.scrollLeft) + 100
    }

    const bestStyle = filteredData.length < 5 ? classes.styling : classes.Dishes
    //   const MapData = filteredData.length == 0 ? Popular_Dishes : filteredData
    useEffect(()=>{
        dispatch(getProducts())
    },[])
    return (

        <div className="w-full h-full">
            <div className="w-full flex justify-between items-center h-[20%] text-white text-[38px] font-bold">
                Popular Dishes
                <div className=" w-[10%] text-md font-light items-center flex justify-between  h-full">
                    <i className="fa-solid fa-arrow-left" onClick={scrolleft} ></i>
                    <i className="fa-solid fa-arrow-right" onClick={scrolright}></i>
                </div>
            </div>
            <div className="w-full h-[75%]">
                {
                    <div className={`${classes.parent} w-full flex items-center overflow-scroll cursor-pointer rounded-md parent h-full `}>

                        {
                            filteredData?.map((items, index) => {

                                return (
                                    // <Link href={'/'}>
                                    <div className={bestStyle} key={index + '4'} >
                                        <PopularDetails
                                            image={items.image}
                                            Name={items.Name}
                                            Description={items.Description}
                                            Price={items.Price}
                                            Add={items.Add}
                                            id={items.id}
                                            cart={items.cart}
                                        />

                                    </div>
                                    // </Link>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    );
}

export default PopularDishes;






{/* <div className={classes.foodImage}>
                            <img src={items.image} alt="" className='' />
                        </div>
                        <div className={classes.fooditem}>
                            <div className="w-full h-full ">
                                <div className="w-full h-[25%] flex justify-end items-center ">
                               <div className="w-[17%] h-[60%] flex justify-center mr-4 items-center rounded-full bg-red-600 text-white"> <i className={items.cart}></i></div>
                                    </div>
                                <div className="w-full  flex justify-center flex-col  items-center  h-[50%] ">
                                    <div className="w-full h-[45%] text-[18px] flex font-bold text-[#919090] items-end justify-center">{items.Name}</div>
                                    <div className="w-[90%] h-[55%] text-sm  flex  items-center text-[#919090] tracking-tight text-justify">{items.Description}</div>
                                </div>
                                <div className="w-full h-[25%] flex justify-around text-white items-center">
                                    <div className="text-[#919090]">{`${items.Price.toFixed(2)}$`}</div>
                                    <div className="w-[17%] h-[60%] rounded-full flex justify-around  text-white items-center bg-red-600"><i className={items.Add}></i> </div>
                        
                                </div>
                            </div>
                        </div> */}