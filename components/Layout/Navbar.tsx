import { useSelector } from "react-redux";

import Link from "next/link";
import classes from "../Layout/Navbar.module.css";
import { useRouter } from "next/router";
import { cartActions } from "../store/CartFeature";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
const Navbar = () => {
  const dispatch = useDispatch();
  const Cartitems = useSelector((state: any) => state.Cart.items);
  let token = useSelector((state: any) => state.Cart.token);
  let isloggedin = useSelector((state: any) => state.Cart.isLoggedIn);
  isloggedin = !!token;
  Cookies.set("isloggedin", isloggedin);
 



  const Cartlength = Cartitems?.reduce((curreitem: number, item: any) => {
    return curreitem + item.Value;
  }, 0);

  const router = useRouter();

  const onlogouthandler = () => {
    router.push('/')
    dispatch(cartActions.logouthandler());

  };

  const showroute = () => {
    router.push("/cartitems");
  };
 

  return (
    <div className="w-[90%] cursor-pointer flex h-[15%] ">
      <div className="w-[15%] h-[100%] flex justify-start items-center">
        <img src="/images/figos-removebg-preview.png"></img>
      </div>
      <div className="w-[65%] text-white h-[100%] flex justify-center items-center ">
        <ul
          className="w-[80%] relative h-[100%] 
            flex justify-around items-center"
        >
          <Link href="/">
            <li className={router.pathname === "/" ? classes.style : 'hover:border-b-2 hover:border-b-red-600'}>
              Home
            </li>
          </Link>
          <Link href="/About_us">
            <li
              className={router.pathname === "/About_us" ? classes.style : 'hover:border-b-2 hover:border-b-red-600'}
            >
              {" "}
              About As
            </li>
          </Link>

          <Link href="/Menu">
            <li className={router.pathname === "/Menu" ? classes.style : "hover:border-b-2 hover:border-b-red-600"}>
              {" "}
              Menu{" "}
            </li>
          </Link>
    
           
            <Link href="/Contact">
              {" "}
              <li
                className={router.pathname === "/Contact" ? classes.style : "hover:border-b-2 hover:border-b-red-600"}
              >
                Contact Us
              </li>
            </Link>
          
        </ul>
      </div>
      <div className="w-[20%] flex text-white  justify-around items-center h-[100%]  ">
        <div
          className="w-[15%] h-[18%] relative  flex place-content-center hover:bg-lime-200 rounded-md bg-white items-center text-black text-sm"
          onClick={showroute}
        >
          <i className="fa-solid fa-cart-shopping">
            <div className="absolute w-4 h-4  rounded-full text-white flex justify-center left-[21.5px] bottom-5 items-center bg-red-600 text-[9px]">
              {Cartlength}
            </div>
          </i>
        </div>
        {!isloggedin && (
          <Link
            href="/SignIn"
            className={router.pathname === "/SignIn" ? classes.style : "hover:border-b-2 hover:border-b-red-600"}
          >
            <button>Sign In</button>
          </Link>
        )}
        {isloggedin && <button onClick={onlogouthandler} className={classes.Login}>Logout</button>}
      </div>
    </div>
  );
};

export default Navbar;
