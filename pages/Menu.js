
import Menulist from '../components/Maincomponent/Menulist';
const Menu = (props) => {
 
    return (<div className="w-[90%] h-[80%] ">
       <Menulist Allfetched={props.Allfetched} />
    </div>);
}

export default Menu;


export async function getStaticProps() {

    const res = await fetch('https://resturant-app-f0a60-default-rtdb.firebaseio.com/populardish.json')
    const data = await res.json()

    let loadedData = []
    for (const key in data) {
        loadedData.push({
            Add: data[key].Add,
            Name: data[key].name,
            Price: data[key].Price,
            cart: data[key].cart,
            image: data[key].image,
            id: data[key].id,

        })
    }
  

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
                image: item[key].image,
            })


        }
    })
    

    const Alldata = [...loadedData, ...maindata]















    return {
        props: {
            Allfetched:Alldata
        }
    }
}