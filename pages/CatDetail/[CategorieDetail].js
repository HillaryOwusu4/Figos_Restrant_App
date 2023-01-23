import  { useRouter } from "next/router";
import { useState } from "react";
import { cartActions } from "../../components/store/CartFeature";
import { useDispatch } from 'react-redux'
const CategorieDetail = ({CatDetailData}) => {
    const [inputvalue,setinput]=useState('1')
    const router = useRouter()
    const dispatch = useDispatch()
    const previousePage = ()=>{
        router.back()
    }
    const  InputHandler = (event)=>{

        setinput(event.target.value)
      }
      const additemHandler = (event) => {

        event.preventDefault()
        dispatch(cartActions.Additems({
            id: CatDetailData.id,
            Name: CatDetailData.Name,
            Price: CatDetailData.Price,
            Value: Number(inputvalue)
        }))
    }

    return ( <div className="w-[90%] h-[70%]">
         <div className="w-full text-white h-[60%] flex ">
    <div className="w-[50%] h-full justify-center items-center flex ">
      <div className="w-[80%] flex flex-col   justify-center  h-[80%]">
       <p className="text-[45px] w-full font-semibold h-[40%]">{CatDetailData.Name}</p>
       <div className="w-full h-[10%] flex justify-between ">
       <p className="font-bold text-[25px]">{`${CatDetailData.Price.toFixed(2)}$`}</p>
       <input type="number" name="text" id="text" max='6'  min='1' value={inputvalue}
       onChange={InputHandler} className='bg-zinc-800 p-1 rounded-sm'/>
       </div>
     <div className="w-full flex mt-3 items-center justify-between h-[15%] ">
    
     <button className="w-[30%] h-[90%] rounded-md bg-red-500 mr-6 hover:bg-red-800" onClick={additemHandler} >Add to cart</button>
     <button className="w-[30%] h-[90%] border-2 border-red-500 rounded-md hover:bg-red-500 " onClick={previousePage}>Back</button>
     </div>
      </div>
    </div>
    <div className="w-[50%] h-full justify-center items-center flex ">
      <img src={CatDetailData.image} alt="" />
    </div>
  </div> 
     
    </div> );
}
 
export default CategorieDetail;

export async function getStaticPaths(){

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
  
 
    const Menulist = fetchedData.map(items => items.items)
 
    const maindata = []
    Menulist.map(item => {
        for (const key in item) {
            maindata.push({
                id: item[key].id,
                Add: item[key].Add,
                Name: item[key].Name,
                Price: item[key].Price,
                cart: item[key].cart,
                image: item[key].image
            })


        }
    })

    const path =  maindata.map(items=>{
        return{
            params:{
                CategorieDetail:items.id.toString()
            }
        }
    })
    
return{
    fallback:false,
    paths:path
}
}

export async function getStaticProps(context){
   const catdetail = context.params.CategorieDetail

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
  
 
    const Menulist = fetchedData.map(items => items.items)
 
    const maindata = []
    Menulist.map(item => {
        for (const key in item) {
            maindata.push({
                id: item[key].id,
                Add: item[key].Add,
                Name: item[key].Name,
                Price: item[key].Price,
                cart: item[key].cart,
                image: item[key].image
            })


        }
    })

    const detailedcat = maindata.find(item=>item.id === catdetail)

    return{
        props:{
            CatDetailData:detailedcat
        }
    }
    
}