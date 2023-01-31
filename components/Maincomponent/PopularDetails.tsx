import classes from "../Maincomponent/popularDishes.module.css";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { cartActions } from "../store/CartFeature";
import { useSelector } from "react-redux";

const PopularDetails = (probs: any) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [inputvalue, setinputvalue] = useState("1");

  const onchangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setinputvalue(event.target.value);
  };
  const additemHandler = (event: React.SyntheticEvent) => {
    
    event.preventDefault();
    dispatch(
      cartActions.Additems({
        id: probs.id,
        Name: probs.Name,
        Price: probs.Price,
        Value: Number(inputvalue),
      })
    );
  };

  const showDetails = () => {
    router.push("/CategoriesId/" + probs.id);
  };

  return (
    <div className="w-[full] h-full flex justify-center">
      <div className="w-[90%] h-full">
        <Link href={`/CategoriesId/` + probs.id} className="w-full h-[80%]">
          <div className="w-full h-[50%] flex justify-center items-center relative object-cover">
            <div className="w-[16%] h-[20%] flex hover:bg-red-900 justify-center mr-4 right-[-20px] top-[20px] items-center absolute rounded-full bg-red-600 text-white">
              <Link href="/cartitems">
                {" "}
                <i className={probs.cart}></i>
              </Link>
            </div>
            <div className="">
            <Image width={190} height={110} alt="" src={probs.image}  />
            </div>
            
          </div>
          <div className="w-full h-[30%] ">
            <div className="w-full h-[30%] flex justify-center items-center font-bold text-zinc-200 text-[20px]">
              {probs.Name}
            </div>
            <div
              className={`${classes.parent} w-full h-[70%] tracking-[-1px]  text-sm  text-zinc-400 font-[200] flex text-justify items-center`}
            >
              {probs.Description}
            </div>
          </div>
        </Link>
        <div className="w-full h-[20%]">
          <div className=" w-full  h-[30%]">
            <p className=" text-sm  text-zinc-400 font-[200]">
              Available-food: {6}
            </p>
          </div>
          <div className="w-full flex justify-between items-center h-[70%]">
            <input
              type="number"
              name="text"
              id="text"
              max="6"
              min="1"
              value={inputvalue}
              onChange={onchangeHandler}
              className="bg-zinc-800 text-[#919090]  p-1 rounded-sm 
                        "
            />
            <div className="text-[#919090] font-bold text-lg">{`${probs.Price.toFixed(
              2
            )}$`}</div>
            <div
              className="w-[17%] h-[75%] rounded-full flex justify-around hover:bg-red-900 text-white items-center bg-red-600"
              onClick={additemHandler}
            >
              <i className={probs.Add}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDetails;
