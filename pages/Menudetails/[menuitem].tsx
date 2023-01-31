import Detailmenu from "../../components/Maincomponent/DetailMenu";
const Menudetail = (props: any) => {
  return (
    <div className="w-[90%] h-full flex justify-center">
      <Detailmenu Menudetail={props.Menudetail} />
    </div>
  );
};

export default Menudetail;

export async function getStaticPaths() {
  const res = await fetch(
    "https://resturant-app-f0a60-default-rtdb.firebaseio.com/populardish.json"
  );
  const data = await res.json();

  let loadedData: {
    Add: string;
    Name: string;
    Price: number;
    cart: string;
    image: string;
    id: string | number;
  }[] = [];
  for (const key in data) {
    loadedData.push({
      Add: data[key].Add,
      Name: data[key].name,
      Price: data[key].Price,
      cart: data[key].cart,
      image: data[key].image,
      id: data[key].id,
    });
  }

  const respone = await fetch(
    "https://categories-d4201-default-rtdb.firebaseio.com/Categories.json"
  );
  const data1 = await respone.json();

  let fetchedData: {
    Name: string;
    image: string;
    id: string | number;
    items: any[];
  }[] = [];
  for (const key in data1) {
    fetchedData.push({
      Name: data1[key].Name,
      image: data1[key].image,
      id: data1[key].id,
      items: data1[key].items,
    });
  }

  const Menulist = fetchedData.map((items) => items.items);

  const maindata: {
    id: number | string;
    Add: string;
    Name: string;
    Price: number;
    cart: string;
    image: string;
  }[] = [];
  Menulist.map((item) => {
    for (const key in item) {
      maindata.push({
        id: item[key].id,
        Add: item[key].Add,
        Name: item[key].Name,
        Price: item[key].Price,
        cart: item[key].cart,
        image: item[key].image,
      });
    }
  });

  const Alldata: any[] = [...loadedData, ...maindata];

  const path = Alldata.map((item) => {
    return {
      params: {
        menuitem: item.id.toString(),
      },
    };
  });

  return {
    fallback: false,
    paths: path,
  };
}
interface Contextype {
  params: { menuitem: string };
  locales: undefined;
  locale: undefined;
  defaultLocale: undefined;
}

interface Propsresponse{
    props: {
        Menudetail: any
      }
}
export async function getStaticProps(context: Contextype):Promise<Propsresponse> {
    
  const Menudetails = context.params.menuitem;
  const Menudetails1:string = Menudetails.toString();

  const res = await fetch(
    "https://resturant-app-f0a60-default-rtdb.firebaseio.com/populardish.json"
  );
  const data = await res.json();

  let loadedData = [];
  for (const key in data) {
    loadedData.push({
      Add: data[key].Add,
      Name: data[key].name,
      Price: data[key].Price,
      cart: data[key].cart,
      image: data[key].image,
      id: data[key].id,
    });
  }

  const respone = await fetch(
    "https://categories-d4201-default-rtdb.firebaseio.com/Categories.json"
  );
  const data1 = await respone.json();

  let fetchedData = [];
  for (const key in data1) {
    fetchedData.push({
      Name: data1[key].Name,
      image: data1[key].image,
      id: data1[key].id,
      items: data1[key].items,
    });
  }

  const Menulist = fetchedData.map((items) => items.items);

  const maindata:{ id:number,
    Add: string,
    Name: string,
    Price: number,
    cart: string,
    image: string}[] = [];
  Menulist.map((item) => {
    for (const key in item) {
      maindata.push({
        id: item[key].id,
        Add: item[key].Add,
        Name: item[key].Name,
        Price: item[key].Price,
        cart: item[key].cart,
        image: item[key].image,
      });
    }
  });

  const Alldata = [...loadedData, ...maindata];
  const Detailmenu = Alldata.find(
    (item) =>
        item.id.toString() === Menudetails1
  );

  
  return {
    props: {
      Menudetail: Detailmenu,
    },
  };
}
