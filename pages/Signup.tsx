import { use, useState } from "react";
import { FadeLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../components/store/CartFeature";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
const Signup = () => {
 const router= useRouter()
   const dispatch = useDispatch()

  const [usernameValue, setusernameValue] = useState("");
  const [EmailValue, setEmailValue] = useState("");
  const [PasswordValue, setPasswordValue] = useState("");
  const [isLoading, setisLoading] = useState(true);
 
  const onchangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setusernameValue(event.target.value);
  };
  const onEmailHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEmailValue(event.target.value);
  };
  const PasswordHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPasswordValue(event.target.value);
  };

  const SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setisLoading(false)
    
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCMUTpqWMhzmA7E87uuiDaB054PpzJWQ1Q",
      {
        method: "POST",
        body: JSON.stringify({
          email: EmailValue,
          password: PasswordValue,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setisLoading(true)
    
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
        router.push('/')
        dispatch(cartActions.loginhandler(data.idToken))
 
      })
      .catch((err) => {
        alert(err.message);
      });
      setisLoading(false)
      setEmailValue('')
      setPasswordValue('')
      setusernameValue('')
  };

  return (
    <>
    <Head>
      <title>Figos Resturant</title><meta
          content="Find the most amazing food in the world, we have all the various variety of foods.
           We are here to be your friend for life"
          name="Description"
        />
    </Head>
    <div className="w-[90%] h-[70%]  flex justify-center ">
      <div className="w-[40%] h-[70%]  ">
        <div className="w-full h-[20%] flex flex-col items-center justify-end">
          <p className="w-[15%] h-[60%] flex justify-center items-end  font-bold text-white text-[40px]">
            SignUp
          </p>
          <div className="w-[23%] h-[4%] bg-gradient-to-r from-red-700 to-zinc-800 hover:from-pink-500 hover:to-yellow-500 ... bg-black"></div>
        </div>
        <div className="w-full h-[80%] ">
          <div className="w-full h-[30%]  text-zinc-500 flex flex-col font-semibold justify-center items-center ">
            <p>Welcome SignUp to access the Sweet Food we have</p>
          </div>
          <form
            className="w-full flex flex-col items-center  justify-around h-[70%] "
            onSubmit={SubmitHandler}
          >
            <input
              type="text"
              placeholder="Username"
              value={usernameValue}
              onChange={onchangeHandler}
              className="w-full text-white outline-none h-[23%] border-b bg-transparent border-b-gray-300"
            ></input>
            <input
              onChange={onEmailHandler}
              value={EmailValue}
              type="Email"
              placeholder="Email"
              className="w-full text-white  outline-none  h-[20%]  border-b bg-transparent border-b-gray-300"
            ></input>
            <input
              onChange={PasswordHandler}
              value={PasswordValue}
              type="Password"
              placeholder="Password"
              className="w-full text-white  outline-none  h-[20%]  border-b bg-transparent border-b-gray-300"
            ></input>

           <div className="w-full h-[25%] flex justify-center  items-center ">
           {!isLoading && <FadeLoader color="#de1818"  />}
           {isLoading && <button
              type="submit"
              className="w-full h-[72%] items-center justify-center hover:bg-gradient-to-r hover:from-zinc-900 hover:to-red-500 flex bg-gradient-to-r from-red-500 rounded-md font-semibold to-zinc-900 "
            >
              <i className="fa-solid fa-right-long border bg-white  w-[5%] h-[18px] text-red-400 rounded-full"></i>
              <p className="ml-2">CONTINUE</p>{" "}
            </button>}
           </div>
           <Link
          href="/SignIn"
          className=" w-[50%] hover:text-red-800 font-semibold text-red-500 flex items-center justify-center   "
        >
         Login with existing account
        </Link>
          </form>
        </div>
      </div>
    </div></>
  );
};

export default Signup;
