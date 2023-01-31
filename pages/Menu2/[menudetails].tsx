import Menulist from "../../components/Maincomponent/Menulist";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { cartActions } from "../../components/store/CartFeature";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
const Details = (props: any) => {
  const dispatch = useDispatch();
  const [inputvalue, setinputvalue] = useState("1");

  const onchangeHandler = (event: any) => {
  
    setinputvalue(event.target.value);
  };
  return (<>
  <Head>
    <title>Figos Resturant</title><meta
          content="Find the most amazing food in the world, we have all the various variety of foods.
           We are here to be your friend for life"
          name="Description"
        />
  </Head>
    <div className="w-[90%] h-[80%] grid grid-cols-3 gap-3 grid-rows-3">
      {props.Menuitems.map((item:{
    id: number|number;
    Price: number;
    Name: string;
    image: string;
    Add: string;
    cart: string;
  }, index: number) => {
        const additemHandler = (event: any) => {
          event.preventDefault();

          dispatch(
            cartActions.Additems({
              id: item.id,
              Name: item.Name,
              Price: item.Price,
              Value: Number(inputvalue),
            })
          );
        };

        return (
          <div  className="w-[full] h-[full] shadow-md shadow-gray-600  flex justify-center rounded-lg bg-gradient-to-b from-zinc-800 to-black" key={index + '1'}>
            <div className="w-[90%] relative h-[100%] text-white ">
              <Link
                href={`/CatDetail/` + item.id}
                key={index + "23"}
                className="w-full h-[84%]"
              >
                <div className="w-[100%]  flex justify-center h-[65%] ">
                 <div className="w-[85%]  flex justify-center items-center h-[100%]">
                 <Image alt='' width={130} height={70} src={item.image}  />
                 </div>
                  <div className="w-[10%] absolute hover:bg-red-900 flex mt-2 justify-center rounded-full text-sm items-center right-[10px] bg-red-600 h-[10%]">
                    <Link href="/cartitems">
                      {" "}
                      <i className={item.cart}></i>
                    </Link>
                  </div>
                </div>
                <div className="w-full h-[19%] flex items-center  justify-center font-semibold ">
                  {item.Name}
                </div>
              </Link>
              <div className="w-full flex justify-between h-[12%] ">
                <input
                  type="number"
                  name="text"
                  id="text"
                  max='6'
                  min="1"
                  value={inputvalue}
                  onChange={onchangeHandler}
                  className="bg-zinc-800 p-1 rounded-sm 
                        "
                />
                <div className="w-[20%] h-full flex items-center font-semibold ">{`${item.Price.toFixed(
                  2
                )}$`}</div>
                <div
                  className="w-[9%] h-[80%] hover:bg-red-900 flex justify-center items-center rounded-full bg-red-600"
                  onClick={additemHandler}
                >
                  <i className={item.Add}></i>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div></>
  );
};

export default Details;

interface url{
  params: {
    menudetails:number|string,
  },
}

interface respond {
  fallback: boolean;
  paths: url[];
}

export async function getStaticPaths(): Promise<respond> {
  const respone = await fetch(
    "https://categories-d4201-default-rtdb.firebaseio.com/Categories.json"
  );
  const data1 = await respone.json();

  let fetchedData: { id: number|string }[] = [];
  for (const key in data1) {
    fetchedData.push({
      id: data1[key].id,
    });
  }

  const path = fetchedData.map((items) => ({
    params: {
      menudetails: items.id,
    },
  }));

  return {
    fallback: false,
    paths: path,
  };
}

interface Propsresponse{
  props: {
    Menuitems:  {
        id: number|number;
        Price: number;
        Name: string;
        image: string;
        Add: string;
        cart: string;
      }[]
    }
}

interface Contextype {
  params: { menudetails: string };
  locales: undefined;
  locale: undefined;
  defaultLocale: undefined;
}

export async function getStaticProps(context: Contextype):Promise<Propsresponse> {
  const MenuId = context.params.menudetails;

  const respone = await fetch(
    "https://categories-d4201-default-rtdb.firebaseio.com/Categories.json"
  );
  const data1 = await respone.json();

  let fetchedData:{ Name:string,
    image: string,
    id: string|number,
    items:string}[] = [];
  for (const key in data1) {
    fetchedData.push({
      Name: data1[key].Name,
      image: data1[key].image,
      id: data1[key].id,
      items: data1[key].items,
    });
  }

  fetchedData.map((item) => {});
  const Menulist: any = fetchedData.find((items) => items.id === MenuId);
  const itemsl = Menulist.items;
  let arry: {
    id: number|number;
    Price: number;
    Name: string;
    image: string;
    Add: string;
    cart: string;
  }[] = [];
  for (const key in itemsl) {
    arry.push({
      id: itemsl[key].id,
      Price: itemsl[key].Price,
      Name: itemsl[key].Name,
      image: itemsl[key].image,
      Add: itemsl[key].Add,
      cart: itemsl[key].cart,
    });
  }

  return {
    props: {
      Menuitems: arry,
    },
  };
}
