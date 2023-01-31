import classes from "../Maincomponent/popularDishes.module.css";
import { useSelector, useDispatch } from "react-redux";

import { useRouter } from "next/router";
import { cartActions } from "../store/CartFeature";

const Cartlist = () => {
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
  const item = useSelector((state: reducerState) => state.Cart.items);
  const Totalamount = useSelector(
    (state: reducerState) => state.Cart.Totalamount
  );
  const router = useRouter();

  const Button = item.length === 0 ? false : true;

 
  const dispatch = useDispatch();
  const backHandler = () => {
    router.push("/");
  };
  const RemoveitemHandler = (id: number) => {
    dispatch(cartActions.Removeitem(id));
  };

  interface Values {
    value: number;
    price: number;
    id: number | string;
  }
  const AddtovalueHandler = (value: Values) => {
    dispatch(cartActions.Addtovalue(value));
  };
  const RemoveHandler = (item: Values) => {
    dispatch(cartActions.Removefromcaert(item));
  };
  const clearHandler = () => {
    dispatch(cartActions.Clearcart());
  };

  const ShowformHandler = () => {
    dispatch(cartActions.showform());
  };

  return (
    <div className="text-white w-full h-full ">
      <div className={`${classes.parent} w-full h-[75%]`}>
        {item?.map((item: any, index:number) => {
          return (
            <div key={index} className="w-full cursor-pointer h-[20%]">
              <div className="w-[100%] border-b-2 border-red-500 flex h-[100%] ">
                <div className="w-[25%] items-center flex flex-col justify-center h-full ">
                  <div className="w-[80%] h-[36%]  flex items-center font-semibold text-[20px]">
                    {item.Name}
                  </div>
                  <div className="w-[80%] h-[36%] font-semibold flex text-[17px] items-center">{`${item.Price.toFixed(
                    2
                  )}$`}</div>
                </div>
                <div className="w-[68%] flex items-center h-full ">
                  <div className="w-[6%] flex mb-4 text-sm justify-center items-center rounded-md border border-gray-500 h-[25%] ">{`x${item.Value}`}</div>
                </div>
                <div className="w-[20%] flex justify-around h-full items-center ">
                  <div
                    className=" w-[25%] h-[30%] rounded-md border border-red-500 hover:bg-zinc-800 flex justify-center items-center"
                    onClick={() =>
                      RemoveHandler({
                        value: item.Value,
                        price: item.Price,
                        id: item.id,
                      })
                    }
                  >
                    -
                  </div>
                  <div
                    className="w-[25%] h-[30%] rounded-md border border-red-500 flex justify-center hover:bg-zinc-800 items-center"
                    onClick={() =>
                      AddtovalueHandler({
                        value: item.Value,
                        price: item.Price,
                        id: item.id,
                      })
                    }
                  >
                    +
                  </div>
                  <div
                    className="w-[25%] h-[30%] rounded-md border text-sm border-red-500 flex justify-center items-center hover:bg-zinc-800 p-2"
                    onClick={() => RemoveitemHandler(item.id)}
                  >
                    Delete
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full h-[15%] ">
        <div className="w-full flex justify-between items-center h-[35%]">
          <p className="text-[20px] font-semibold ml-4">Total Amount</p>
          <p className="text-[20px] font-semibold mr-4">{`${Totalamount.toFixed(
            2
          )}$`}</p>
        </div>
        <div className="w-full flex justify-end items-center h-[65%] ">
          <button
            className="w-[15%] h-[54%] rounded-md mr-4  border border-red-500 "
            onClick={backHandler}
          >
            Close
          </button>
          {Button && (
            <button
              className="w-[15%] h-[54%] rounded-md mr-4 bg-red-500"
              onClick={clearHandler}
            >
              Clear
            </button>
          )}
          {Button && (
            <button
              className="w-[15%] h-[54%] rounded-md mr-4 bg-red-500"
              onClick={ShowformHandler}
            >
              Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cartlist;
