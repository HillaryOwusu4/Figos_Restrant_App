
import { useSelector } from "react-redux";
import { useState } from "react";
import Link from 'next/link';
import classes from '../Layout/Navbar.module.css'
import{ useRouter} from 'next/router'
import Orderedsucess from "../Maincomponent/Orderedsucess";
const Navbar = () => {
    const Cartitems = useSelector(state=>state.Cart.items)
    // const Cartlength = Cartitems.length
    const Cartlength = Cartitems?.reduce((curreitem, item) => {
        return curreitem + item.Value
    }, 0)
    // const Cartlength=Cartitems?.reduce((defaultvalue, item)=>{
    //     return defaultvalue + item.Value
    // },0)
  
    const Active = 'border-b border-b-red'
    const notActive = ''
    // const[visible,setvisible] = useState(false)

    // const navHandler = ()=>{
    //     setvisible(true)
    // }
const router = useRouter()

const showroute = ( )=>{
    router.push('/cartitems')
}
    const isActive = ()=>{

    }

    return (<div className="w-[90%] cursor-pointer flex h-[15%] ">
        <div className="w-[15%] h-[100%] flex justify-start items-center">
            <img src="/images/figos-removebg-preview.png"></img>
        </div>
        <div className="w-[65%] text-white h-[100%] flex justify-center items-center " >
            <ul className="w-[80%] relative h-[100%] 
            flex justify-around items-center">
                <Link href="/"  ><li className={router.pathname === '/' ? classes.style:''}>Home</li></Link>
                <Link href='/About_us'><li className={router.pathname === '/About_us' ? classes.style:''}> About As</li></Link>

                <Link href="/Menu"><li className={router.pathname === '/Menu' ? classes.style:''} > Menu </li></Link>
                <Link href="/Review"><li className={router.pathname === '/Review' ? classes.style:''}>Reviews</li></Link>
                <Link href="/Contact"> <li className={router.pathname === '/Contact' ? classes.style:''}>Contact Us</li></Link>
              
            </ul>
        </div>
        <div className="w-[20%] flex text-white  justify-around items-center h-[100%]  ">
            <div className="w-[15%] h-[18%] relative flex place-content-center hover:bg-lime-200 rounded-md bg-white items-center text-black text-sm" onClick={showroute}><i className="fa-solid fa-cart-shopping"
            >
                <div className="absolute w-4 h-4  rounded-full text-white flex justify-center left-[21.5px] bottom-5 items-center bg-red-600 text-[9px]"  >
                    {Cartlength}
                </div>
            </i>

            </div>
            <button className="hover:w-[40%] hover:h-[30%] hover:rounded-md hover:shadow-lg hover:shadow-[#0D5030]  hover:bg-green-500">Sign In</button>
            <button className="hover:w-[40%] hover:h-[30%] hover:rounded-md hover:shadow-lg hover:shadow-[#0D5030]  hover:bg-green-500">Sign up</button>
        </div>
    </div>);
}

export default Navbar;