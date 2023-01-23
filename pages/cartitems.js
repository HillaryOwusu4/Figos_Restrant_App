import Cartlist from "../components/Maincomponent/Cartlist";
import CartForm from "../components/Maincomponent/Cartform";
import { useSelector } from "react-redux";
const Cartitem = () => {
const cartForm = useSelector((state)=>state.Cart.form)
const cartlist = useSelector((state)=>state.Cart.cartlist)
    return (

        <div className="w-[80%] h-[80%]">
          { cartForm && <CartForm/>}
          {cartlist &&<Cartlist />}
        </div>
    );
}

export default Cartitem;