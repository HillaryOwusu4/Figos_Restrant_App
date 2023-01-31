import DetailDish from "../../components/Maincomponent/detail";

const Populardish = (props:any) => {


    return ( <div className="text-white w-[90%] h-full ">
       <DetailDish detailspop={props.detailspop} />
    </div> );
}
 
export default Populardish;


interface url{
  params: {
    populardis:number|string,
  },
}

interface respond {
  fallback: boolean;
  paths: url[];
}


export  async function getStaticPaths():Promise<respond> {
    const res =  await fetch('https://resturant-app-f0a60-default-rtdb.firebaseio.com/populardish.json')
    const data = await res.json()
    
    let loadedData=[];
    for( const key in data){
      loadedData.push({
        Name:data[key].name,
        Description:data[key].Description,
        Price:data[key].Price,
        cart:data[key].cart,
        Add:data[key].Add,
        image:data[key].image,
        id:data[key].id,
      })
    }

    const path = loadedData.map(item=>({
        params:{
            populardis:item.id.toString()
        }
    })
    )


    return{
        fallback:true,
        paths:path
    }
}
interface Propsresponse{
  props: {
    detailspop: {
      Name: string;
      Description: string;
      Price: number;
      cart: string;
      Add: string;
      image: string;
      id: number|string;
  }|undefined 
    }
}

interface Contextype {
  params: { populardis: string };
  locales: undefined;
  locale: undefined;
  defaultLocale: undefined;
}
export async function getStaticProps(context:Contextype):Promise<Propsresponse>{

    const popularDish = context.params.populardis
    const quantity1 = Number(popularDish)


    const res =  await fetch('https://resturant-app-f0a60-default-rtdb.firebaseio.com/populardish.json')
    const data = await res.json()
 
    let loadedData:{Name:string,
      Description:string,
      Price:number,
      cart:string,
      Add:string,
      image:string,
      id:string|number}[]=[];
    for( const key in data){
      loadedData.push({
        Name:data[key].name,
        Description:data[key].Description,
        Price:data[key].Price,
        cart:data[key].cart,
        Add:data[key].Add,
        image:data[key].image,
        id:data[key].id
      })
    }

  
   const data1:{
    Name: string;
    Description: string;
    Price: number;
    cart: string;
    Add: string;
    image: string;
    id: number|string;
}|undefined = loadedData.find(item=>item.id === quantity1)
    

    return{
        props:{
              detailspop:data1
        }
    }
}

