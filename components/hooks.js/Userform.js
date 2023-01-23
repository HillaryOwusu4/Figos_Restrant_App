import { useState } from "react";
const Userinfo = (validate) => {
    
    const [enteredValue, setenteredValue] = useState('');
    const [inputTouched, setinputTouched] = useState(false);

    let InputValidation = validate(enteredValue)
    const inputHaserrors = !InputValidation && inputTouched

    const InputChangeHandler = (event) => {
        setenteredValue(event.target.value)
    }

    const InputBlurHandler = () => {
        setinputTouched(true)
    }

     const rest = () =>{
        setinputTouched(false)
        setenteredValue('')
     }
    return{
        value:enteredValue,inputHaserrors,InputChangeHandler,InputBlurHandler,InputValidation,rest

    };
}
 
export default Userinfo;