
import LandingPage from "../components/Maincomponent/LandingPage"

export default function Home(props) {

  return (
    <>   
    <LandingPage Popular_Dishes={props.Popular_Dishes} Categories={props.Categories} />    
      </>
  )
}

export async function getStaticProps(){
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
 
  const respone =  await fetch('https://categories-d4201-default-rtdb.firebaseio.com/Categories.json')
  const data1 = await respone.json()
  
  let fetchedData=[];
  for( const key in data1){
    fetchedData.push({
      Name:data1[key].Name,
      image:data1[key].image,
      id:data1[key].id,
      items:data1[key].items
    })
  }



  return{
    props:{
      Popular_Dishes: loadedData,
      Categories:fetchedData
      
    }
  }
}