import classes from '../Maincomponent/popularDishes.module.css'
import Link from 'next/link'
import PopularDetails from '../Maincomponent/PopularDetails';
import Image from 'next/image';
import { useRouter } from "next/router";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../store/ProductsFeature';
import { useSelector } from 'react-redux';
const PopularDishes = ({ Popular_Dishes, filteredData }:any) => {
    
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
                            filteredData?.map((items:{image:string,Name:string,Description:string,Price:string,Add:string,id:number,cart:string}, index:number) => {

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






