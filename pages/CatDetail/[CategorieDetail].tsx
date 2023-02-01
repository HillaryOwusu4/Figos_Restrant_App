import  { useRouter } from "next/router";
import { useState } from "react";
import { cartActions } from "../../components/store/CartFeature";
import { useDispatch } from 'react-redux'
import Image from "next/image";
import Head from "next/head";
const CategorieDetail = (props:any) => {
    const [inputvalue,setinput]=useState('1')
    const router = useRouter()
    const dispatch = useDispatch()
    const previousePage = ()=>{
        router.back()
    }
    const  InputHandler = (event:any)=>{

        setinput(event.target.value)
      }
      const additemHandler = (event:any) => {

        event.preventDefault()
        dispatch(cartActions.Additems({
            id: props.CatDetailData.id,
            Name:props. CatDetailData.Name,
            Price:props. CatDetailData.Price,
            Value: Number(inputvalue)
        }))
    }

    return ( <div className="w-[90%] h-[70%]">
       
         <div className="w-full text-white h-[60%] flex ">
         <Head>
            <title>Figos Returant</title><meta
          content="Find the most amazing food in the world, we have all the various variety of foods.
           We are here to be your friend for life"
          name="Description"
        />
         </Head>
    <div className="w-[50%] h-full justify-center items-center flex ">
      <div className="w-[80%] flex flex-col   justify-center  h-[80%]">
       <p className="text-[45px] w-full font-semibold h-[40%]">{props.CatDetailData.Name}</p>
       <div className="w-full h-[10%] flex justify-between ">
       <p className="font-bold text-[25px]">{`${props.CatDetailData.Price.toFixed(2)}$`}</p>
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
      <Image width={500} height={400} src={props.CatDetailData.image} alt="" />
    </div>
  </div> 
     
    </div> );
}
 
export default CategorieDetail;

interface url{
    params: {
        CategorieDetail:number|string,
    },
  }
  
  interface respond {
    fallback: boolean;
    paths: url[];
  }
  
export async function getStaticPaths():Promise<respond>{

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
 
    const maindata:any[] = []
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
interface Respond {
    props:{
        CatDetailData: 
        {
            Add: string;
            Name: string;
            Price: number;
            cart: string;
            image: string;
            id: string ;
        }|undefined
      
    }
}
interface Contextype {
    params: { CategorieDetail: string };
    locales: undefined;
    locale: undefined;
    defaultLocale: undefined;
  }
export async function getStaticProps(context:Contextype):Promise<Respond>{
   const catdetail:string = context.params.CategorieDetail

    const respone = await fetch('https://categories-d4201-default-rtdb.firebaseio.com/Categories.json')
    const data1 = await respone.json()
  
    let fetchedData:{
        Name: string;
        items:any,
        image: string;
        id: string | number}[] = [];
    for (const key in data1) {
      fetchedData.push({
        Name: data1[key].Name,
        image: data1[key].image,
        id: data1[key].id,
        items: data1[key].items
      })
    }
  
 
    const Menulist = fetchedData.map(items => items.items)
 
    const maindata:{Add: string;
        Name: string;
        Price: number;
        cart: string;
        image: string;
        id: string }[] = []
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