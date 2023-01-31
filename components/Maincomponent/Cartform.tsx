import Userinfo from '../hooks/Userform'
import classes from '../Maincomponent/cartform.module.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/CartFeature";
import Router, { useRouter } from "next/router";
import { FormEvent } from 'react';


const CartForm = () => {
    interface list {
        id: string;
        Name: string;
        Price: number;
        Value: number;
      }
      interface Cartstate {
        items: list[];
        Totalamount: number;
        toggle: boolean;
        form: boolean;
        cartlist: boolean;
      }
      interface reducerState {
        Cart: Cartstate;
        Products: any[];
      }
    const router = useRouter()
    const item = useSelector((state:reducerState) => state.Cart.items)
    const dispatch = useDispatch()
    const ShowOrdedHandler = () => {
    
        dispatch(cartActions.showToggle())
        router.push('/')}

        const BacktocartHandler= ()=>{
       dispatch(cartActions.Hideform())
        }

    const { value: inputedValue, inputHaserrors: inputedError, InputChangeHandler: nameChangehandler, InputBlurHandler: nameOnblurhandler, InputValidation: inputIsValid, rest:restForm } = Userinfo((value:any) => value.trim() !== '')

    const { value: inputedStreet, inputHaserrors: inputedstreetError, InputChangeHandler: StreetChangehandler, InputBlurHandler: StreetOnblurhandler, InputValidation: inputStreerIsValid, rest:streetrestForm } = Userinfo((value:any) => value.trim() !== '')

    const { value: inputedCity, inputHaserrors: inputedCityError, InputChangeHandler: CityChangehandler, InputBlurHandler: CityOnblurhandler, InputValidation: inputCityIsValid, rest:CityrestForm } = Userinfo((value:any) => value.trim() !== '')

    const { value: inputedPostal, inputHaserrors: inputedPostalError, InputChangeHandler: PostalChangehandler, InputBlurHandler: PostalOnblurhandler, InputValidation: inputPostalIsValid, rest:PostalrestForm } = Userinfo((value:any) => value.trim() !== '')

   let Formisvalid = false;

   if (inputIsValid && inputStreerIsValid && inputCityIsValid && inputPostalIsValid ) {
       Formisvalid = true
   }
   const SubmitHandler = (event:React.FormEvent<HTMLFormElement>) => {

    event.preventDefault()
    fetch('https://categories-d4201-default-rtdb.firebaseio.com/Order.json',
    {
        method:'POST',
        body:JSON.stringify({
            User:{
                Name:inputedValue,
                Street:inputedStreet,
                Postalcode:inputedPostal,
                City:inputedCity
            },
            orderedItems:item

        }),
       
   
    })



    restForm()
    streetrestForm()
    CityrestForm()
    PostalrestForm()
    dispatch(cartActions.Clearcart())
    ShowOrdedHandler()
    dispatch(cartActions.Hideform())
    
}
const now =  `${'that' +' '+ 'you'}`
const inputChangeStyle = inputedError ? `${classes.form +' '+ classes.invalid}` : `${classes.form}`

const streetchangeStyle = inputedstreetError ? `${classes.form +' '+ classes.invalid}` :  `${classes.form}`

const CitychangeStyle = inputedCityError ? `${classes.form +' '+ classes.invalid}` :  `${classes.form}`
const PostalchangeStyle = inputedPostalError ? `${classes.form +' '+ classes.invalid}` :  `${classes.form}`

return (
    <div className="w-[100%] h-[60%] flex flex-col justify-center items-center">
       <form onSubmit={SubmitHandler} className='w-[60%] h-[95%] rounded-md bg-zinc-900 flex flex-col justify-center items-center'>
            <div className="w-full h-[80%] flex flex-col justify-center items-center">
                <div className={inputChangeStyle}>
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' id='name' value={inputedValue} onChange={nameChangehandler} onBlur={nameOnblurhandler} />
                    {inputedError && <p className='error-text'>Please enter a valid first name</p>}
                </div>

                <div className={streetchangeStyle}>
                    <label htmlFor='name'>Street</label>
                    <input type='text' id='street' value={inputedStreet} onChange={StreetChangehandler} onBlur={StreetOnblurhandler}  />
                    { inputedstreetError && <p className='error-text'>Please enter a valid Street name</p>
                }
                </div>

                <div className={PostalchangeStyle}>
                    <label htmlFor='name'>Postal code</label>
                    <input type='text' id='Postal code' value={inputedPostal} onChange={PostalChangehandler} onBlur={PostalOnblurhandler}/>
                    {inputedPostalError && <p>Please enter a valid Postal code</p>}
                </div>

                <div className={CitychangeStyle}>
                    <label htmlFor='email'>City</label>
                    <input type='text' id='city'  value={inputedCity} onChange={CityChangehandler} onBlur={CityOnblurhandler}  />
                    
                    {inputedCityError && <p className={`${classes.error}`}> Please enter a valid City name</p>}

                </div>
            </div>
            <div className='w-full h-[20%] flex text-white justify-center items-center'>
               <div className="w-[55%] h-full  flex justify-between items-center">
               <button className='button w-[40%] h-[49%]  text-white rounded-full flex justify-center hover:bg-red-900 bg-red-500 items-center' onClick={BacktocartHandler} >Cancel</button>
                <button className='buttons w-[40%] h-[49%] bg-none border text-red-400 rounded-full hover:bg-red-600 hover:text-white border-red-600' disabled={!Formisvalid} type='submit'>Submit</button>
               </div>

            </div>
        </form>
    </div>

)
}
 
export default CartForm;