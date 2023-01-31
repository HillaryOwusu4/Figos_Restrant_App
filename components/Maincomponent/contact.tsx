import { useState } from "react";
import { useEffect } from "react";
import classes from "../Maincomponent/contact.module.css";
const Contact_us = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValue1, setEnteredValue1] = useState("");
  const [enteredValue2, setEnteredValue2] = useState("");
  const [formIsvalid, setFormIsvalid] = useState(false);

  const [blur, setBlur] = useState(false);
  const InputChangeHandler = (event: any) => {
    setEnteredValue(event.target.value);
  };
  const InputChangeHandler1: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setEnteredValue1(event.target.value);
  };
  const InputChangeHandler2: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setEnteredValue2(event.target.value);
  };
  const InputBlurHandler = () => {
    setBlur(true);
  };

  useEffect(() => {
    if (
      enteredValue2.trim() !== "" &&
      enteredValue1.trim() !== "" &&
      enteredValue.trim() !== ""
    ) {
      setFormIsvalid(true);

    } else {
      setFormIsvalid(false);
    }
  }, []);

  const SubmitHandler= (event:React.FormEvent<HTMLFormElement>) =>  {
    event.preventDefault();
    
    let url =
      "https://veggie-restuarant-default-rtdb.firebaseio.com/UserAddress.json";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        UserInfo: {
          name: enteredValue,
          age: enteredValue1,
          comment: enteredValue2,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setEnteredValue("");
    setEnteredValue1("");
    setEnteredValue2("");
  };
  return (
    <div className="w-full h-[100%] flex  items-center justify-center">
      <div className={`${classes.grid} w-[80%] h-full`}>
        <div
          className={`${classes.Address}  bg-zinc-900  flex justify-end items-center`}
        >
          <div className="w-[68%] h-[80%]">
            <div className="w-[100%] flex flex-col justify-center items-center h-[25%]">
              <p className="text-[36px] w-[80%]  text-gray-100 text-gray-800">
                Get in Touch
              </p>
              <p className="w-[80%] text-gray-100">
                Feel free to drop us a line below!
              </p>
            </div>
            <div className="w-[100%] flex flex-col  h-[75%] ">
              <form
                action=""
                onSubmit={SubmitHandler}
                className="w-[100%] flex items-center flex-col h-[100%]"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-[80%] outline-none p-4 bg-slate-100  h-[16%] mt-3 rounded-md mb-4"
                  onChange={InputChangeHandler}
                  onBlur={InputBlurHandler}
                  value={enteredValue}
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-[80%] h-[16%] outline-none p-4 bg-slate-100 mt-3 rounded-md mb-4"
                  onChange={InputChangeHandler1}
                  onBlur={InputBlurHandler}
                  value={enteredValue1}
                ></input>
                <textarea
                  placeholder="Typing your massage here...."
                  className="w-[80%] outline-none p-4 bg-slate-100 h-[40%] mt-3 rounded-md mb-4"
                  onChange={InputChangeHandler2}
                  onBlur={InputBlurHandler}
                  value={enteredValue2}
                ></textarea>
                <button
                  className="w-[30%] h-[15%]  bg-red-600 rounded-md text-white"
                  disabled={!formIsvalid}
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div
          className={`${classes.Form}  bg-red-600 flex justify-center items-center`}
        >
          <div className="w-[80%] h-[80%] ">
            <div className="w-full h-[20%] flex text-[30px] font-semibold text-white items-end">
              Contact Us
            </div>
            <div className="w-full h-[69%] flex ">
              <div className="w-[18%] h-full flex flex-col justify-around text-[20px] text-white">
                <i className="fa-solid fa-location-dot"></i>
                <i className="fa-regular fa-envelope"></i>
                <a href="tel:123-456-7890">
                  {" "}
                  <i className="fa-solid fa-phone"></i>
                </a>
                <a href="tel:123-456-7890">
                  <i className="fa-solid fa-fax"></i>
                </a>
              </div>
              <div className="w-[82%] h-full cursor-pointer text-white ">
                <p className="mt-7 w-[70%]">
                  32 Avenue ve Newyak 321994 newyork
                </p>
                <a href={`mailto:hillary.owusu@amalitech.com`}>
                  <p className="mt-8">hillary@gmail.com</p>
                </a>
                <a href={`tel:0242561668`}>
                  <p className="mt-12">+3356 1589 2105</p>
                </a>
                <p className="mt-12">+3326 1235 2105</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_us;
