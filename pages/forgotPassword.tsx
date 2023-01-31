
import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Head from "next/head";
const Forgotpassword = () => {
    const token = useSelector((state:any)=>state.Cart.token)
    console.log('token',token)
    const[change,setChange]=useState('')
    const changeHandler:React.ChangeEventHandler<HTMLInputElement> = (event)=>{
        setChange(event.target.value)
    }
    const SubmitHandler =(event: React.FormEvent<HTMLFormElement>)=>{
       event.preventDefault()
       console.log(change)
       fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCMUTpqWMhzmA7E87uuiDaB054PpzJWQ1Q',
       {
        method:'POST',
        body:JSON.stringify({
            idToken:token,
            password:change,
            returnSecureToken:false
        })
       }).then((res) => {
 
    
        // setSpinner(false)
        if (res.ok) {
          return res.json();
 
        } else {
          return res.json().then((data) => {
            let errorMessage = "Athentication Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
  
      })
      .catch((err) => {
        alert(err.message);
      });
    }

    return ( <> <Head>
      <title>Figos Resturant</title>
  </Head>
    
    <div className="w-[90%] h-full flex items-center justify-center">
              <div className="w-[50%] h-[65%] ">
                <div className="w-[100%] h-[40%] flex justify-center items-center">
                    <Image alt="" src="/images/forgot-password.png" fill className="w-[50%] h-[100%]"/>
                </div>
                <form onSubmit={SubmitHandler} className="w-[100%] flex  items-center flex-col h-[60%] ">
                    <label className="text w-full text-white h-[30%] flex justify-center items-center">Forget Password?</label>
                   <input type="Password" placeholder="Change Password" onChange={changeHandler} value={change} className="w-[80%] text-white outline-none bg-transparent border-b-2 border-b-zinc-700 h-[15%]" />
                   <button type="submit" className="w-[30%] mt-7 h-[13%] font-semibold rounded-md bg-gradient-to-r from-red-600 to-zinc-900 bg-amber-100">Change Password</button>
                </form>
              </div>
    </div> </>);
}
 
export default Forgotpassword;