import DetailDish from "../../components/Maincomponent/detail";

const Populardish = (props) => {


    return ( <div className="text-white w-[90%] h-full ">
       <DetailDish detailspop={props.detailspop} />
    </div> );
}
 
export default Populardish;

export  async function getStaticPaths(){
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

export async function getStaticProps(context){

    const popularDish = context.params.populardis
    const quantity1 = Number(popularDish)


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
        id:data[key].id
      })
    }

  
   const data1 = loadedData.find(item=>item.id === quantity1)
    

    return{
        props:{
              detailspop:data1
        }
    }
}

