import Menulist from "../../components/Maincomponent/Menulist";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { cartActions } from "../../components/store/CartFeature";
import { useState } from "react";
const Details = (props) => {

  const dispatch = useDispatch()
  const [inputvalue,setinputvalue]=useState('1')

  const onchangeHandler = (event)=>{

     setinputvalue(event.target.value)
  }
  return (<div className="w-[90%] h-[80%] grid grid-cols-3 gap-3 grid-rows-3">
    {
      props.Menuitems.map((item,index )=> {
        const additemHandler = (event) => {
          event.preventDefault()
   
         dispatch(cartActions.Additems({
          id:item.id,
          Name:item.Name,
          Price:item.Price,
          Value:Number(inputvalue)
          }))
     }


        return (
          <div  className="w-[full] h-[full] shadow-md shadow-gray-600  flex justify-center rounded-lg bg-gradient-to-b from-zinc-800 to-black">


              <div className="w-[90%] relative h-[100%] text-white ">
               <Link href={`/CatDetail/` + item.id} key={index + '23'}  className="w-full h-[84%]">
               <div className="w-[100%]  flex justify-center h-[65%] ">
                  <img src={item.image} className="w-[45%] h-[100%]" />
                  <div className="w-[10%] absolute hover:bg-red-900 flex mt-2 justify-center rounded-full text-sm items-center right-[10px] bg-red-600 h-[10%]">
                  <Link href='/cartitems'>  <i className={item.cart}></i></Link>
                  </div>
                </div>
                <div className="w-full h-[19%] flex items-center  justify-center font-semibold ">{item.Name}</div>
               </Link>
                <div className="w-full flex justify-between h-[12%] ">
                <input type="number" name="text" id="text" max='6'  min='1'  value={inputvalue} onChange={onchangeHandler}  className='bg-zinc-800 p-1 rounded-sm 
                        '/>
                  <div className="w-[20%] h-full flex items-center font-semibold ">{`${item.Price.toFixed(2)}$`}</div>
                  <div className="w-[9%] h-[80%] hover:bg-red-900 flex justify-center items-center rounded-full bg-red-600" onClick={additemHandler}>
                    <i className={item.Add}></i>
                  </div>
                </div>
         

            </div></div>
        )
      })
    }
  </div>
  );
}

export default Details;

export async function getStaticPaths() {
  const respone = await fetch('https://categories-d4201-default-rtdb.firebaseio.com/Categories.json')
  const data1 = await respone.json()

  let fetchedData = [];
  for (const key in data1) {
    fetchedData.push({

      id: data1[key].id,
    })
  }
  const path = fetchedData.map(items => ({
    params: {
      menudetails: items.id
    }
  }))

  return {
    fallback: false,
    paths: path
  }
}

export async function getStaticProps(context) {
  const MenuId = context.params.menudetails
  
  const respone = await fetch('https://categories-d4201-default-rtdb.firebaseio.com/Categories.json')
  const data1 = await respone.json()

  let fetchedData = [];
  for (const key in data1) {
    fetchedData.push({

      Name: data1[key].Name,
      image: data1[key].image,
      id: data1[key].id,
      items: data1[key].items
    })
  }

  fetchedData.map(item => {

  })
  const Menulist = fetchedData.find(items => items.id === MenuId)
  const itemsl = Menulist.items
  let arry = []
  for (const key in itemsl) {
    arry.push({
      id: itemsl[key].id,
      Price: itemsl[key].Price,
      Name: itemsl[key].Name,
      image: itemsl[key].image,
      Add: itemsl[key].Add,
      cart: itemsl[key].cart,
    })
  }



  return {
    props: {
      Menuitems: arry
    }
  }
}