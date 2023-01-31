import { useState } from "react";
import { FadeLoader } from "react-spinners";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../components/store/CartFeature";
import Cookies from "js-cookie";
import Head from "next/head";
const SignIn = () => {
  

  const [isLoading, setisLoading] = useState(true);
  const [EmailValue, setEmailValue] = useState("");
  const [PasswordValue, setPasswordValue] = useState("");
  const router = useRouter();
  // history =router.pathname
  const dispatch = useDispatch();
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
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCMUTpqWMhzmA7E87uuiDaB054PpzJWQ1Q",
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
        setisLoading(true);

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
        dispatch(cartActions.loginhandler(data.idToken));
        let url = window.location.pathname === '/SignIn' ? '/' : window.location.pathname
        console.log('url',url)
        router.push(url);
        setisLoading(true);
       
      })
      .catch((err) => {
        alert(err.message);
      });
    setisLoading(false);
    setEmailValue("");
    setPasswordValue("");
  };

  return (<><Head>
    <title>Figos Resturant</title><meta
          content="Find the most amazing food in the world, we have all the various variety of foods.
           We are here to be your friend for life"
          name="Description"
        /></Head>
    <div className="w-[90%] h-[70%]  flex justify-center ">
      <div className="w-[40%] h-[70%]  ">
        <div className="w-full h-[20%]  flex flex-col items-center justify-end">
          <p className="w-[15%] h-[60%] flex justify-center items-end  font-bold text-white text-[40px]">
            SignIn
          </p>
          <div className="w-[23%] h-[4%] bg-gradient-to-r from-red-700 to-zinc-800 hover:from-pink-500 hover:to-yellow-500 ... bg-black"></div>
        </div>
        <div className="w-full  h-[80%] ">
          <div className="w-full h-[34%]  text-zinc-500 flex flex-col font-semibold justify-center items-center ">
            <p>Welcome back! Login to access the Sweet Food we have</p>
            <div>
              Did you{" "}
              <Link
                href="/forgotPassword"
                className="text-red-500 hover:text-red-800"
              >
                forget your password?
              </Link>
            </div>
          </div>
          <form
            className="w-full flex flex-col items-center  justify-around h-[60%] "
            onSubmit={SubmitHandler}
          >
            <input
              onChange={onEmailHandler}
              value={EmailValue}
              type="Email"
              placeholder="Email"
              className="w-full text-white outline-none h-[23%] border-b bg-transparent border-b-gray-300"
            ></input>
            <input
              onChange={PasswordHandler}
              value={PasswordValue}
              type="Password"
              placeholder="Password"
              className="w-full text-white  outline-none  h-[15%]  border-b bg-transparent border-b-gray-300"
            ></input>
            <div className="w-full h-[25%] flex justify-center   items-center">
              {!isLoading && <FadeLoader color="#de1818" />}
              {isLoading && (
                <button
                  type="submit"
                  className="w-full hover:bg-gradient-to-r hover:from-zinc-900 hover:to-red-500 h-[72%] items-center justify-center flex bg-gradient-to-r from-red-500 rounded-md font-semibold to-zinc-900 "
                >
                  <i className="fa-solid fa-right-long border bg-white  w-[5%] h-[18px] text-red-400 rounded-full"></i>
                  <p className="ml-2">CONTINUE</p>{" "}
                </button>
              )}
            </div>
            <Link
              href="/Signup"
              className=" w-[40%] hover:text-red-800 font-semibold text-red-500 flex items-center justify-center   "
            >
              Create new account
            </Link>
          </form>
        </div>
      </div>
    </div></>
  );
};

export default SignIn;
