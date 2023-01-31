import Cartlist from "../components/Maincomponent/Cartlist";
import CartForm from "../components/Maincomponent/Cartform";
import { useSelector } from "react-redux";
import Head from "next/head";
const Cartitem = () => {
const cartForm = useSelector((state:any)=>state.Cart.form)
const cartlist = useSelector((state:any)=>state.Cart.cartlist)
    return (

        <div className="w-[80%] h-[80%]">
           <Head>
            <title>Figos Resturant</title><meta
          content="Find the most amazing food in the world, we have all the various variety of foods.
           We are here to be your friend for life"
          name="Description"
        />
        </Head>
          { cartForm && <CartForm/>}
          {cartlist &&<Cartlist />}
        </div>
    );
}

export default Cartitem;