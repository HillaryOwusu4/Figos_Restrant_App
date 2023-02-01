import { useRouter } from "next/router";
import Image from "next/image";
import { cartActions } from "../store/CartFeature";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
const DetailDish = ({
  detailspop = {
    id: 3,
    Name: "Hillary",
    Price: 34,
    Description: "Description",
  },
  demo,
}: any) => {

  const [dem, setDemo] = useState({ ...demo });
  const dispatch = useDispatch();
  const router = useRouter();
  const back = () => {
    router.back();
  };
  const [inputvalue, setinput] = useState("1");
  const InputHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setinput(event.target.value);
  };

  const additemHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(
      cartActions.Additems({
        id: dem?.id,
        Name: dem?.Name,
        Price: dem?.Price,
        Value: Number(inputvalue),
      })
    );
  };
useEffect(()=>{
  setDemo({ ...demo })
},[])

  return (
    <div className="w-full  h-[70%] flex ">
      <div className="w-[50%] h-full  justify-center items-center flex ">
        <div className="w-[80%] flex flex-col justify-center  h-[70%]">
          <p className="text-[48px] w-full font-semibold h-[20%]">{dem?.Name}</p>
          <p className=" w-full text-justify  h-[20%]">{dem?.Description}</p>
          <div className="w-full flex justify-between items-center h-[15]">
            <p className="font-semibold text-[20px]">Available-item:{6}</p>
            <p className="font-bold text-[20px]">{`${dem.Price}$`}</p>
            <input
              type="number"
              id="text"
              max="6"
              min="1"
              value={inputvalue}
              onChange={InputHandler}
              className="bg-zinc-800 p-1 rounded-sm"
            />
          </div>
          <div className="w-full flex items-center justify-between mt-4 h-[15%] ">
            <button
              className="w-[30%] h-[70%] rounded-md bg-red-500 mr-6 hover:bg-red-900"
              onClick={additemHandler}
            >
              Add to cart
            </button>
            <button
              className="w-[30%] h-[70%] border-2 border-red-500 rounded-md
     "
              onClick={back}
            >
              Back
            </button>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-full justify-center items-center flex ">
        <Image src={dem.image} width={640} height={460} alt="" />
      </div>
    </div>
  );
};

export default DetailDish;
