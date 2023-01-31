import { Fragment } from "react";
import Head from "next/head";
import LandingPage from "../components/Maincomponent/LandingPage";

export default function Home(props: any) {
  return (
    <Fragment>
      <Head>
        <title>Figos Returant</title>
        <meta
          content="Find the most amazing food in the world, we have all the various variety of foods.
           We are here to be your friend for life"
          name="Description"
        />
      </Head>
      <LandingPage
        Popular_Dishes={props.Popular_Dishes}
        Categories={props.Categories}
      />
    </Fragment>
  );
}

interface data {
  Name: string;
  Description: string;
  Price: number;
  cart: string;
  Add: string;
  image: string;
  id: number;
}
interface resData {
  props: {
    Popular_Dishes: data[];
    Categories: {
      Name: string;
      image: string;
      id: number;
      items: any;
    }[];
  };
}

export async function getServerSideProps(): Promise<resData> {
  const res = await fetch(
    "https://resturant-app-f0a60-default-rtdb.firebaseio.com/populardish.json"
  );
  const data = await res.json();

  interface data {
    Name: string;
    Description: string;
    Price: number;
    cart: string;
    Add: string;
    image: string;
    id: number;
  }

  let loadedData: data[] = [];
  for (const key in data) {
    loadedData.push({
      Name: data[key].name,
      Description: data[key].Description,
      Price: data[key].Price,
      cart: data[key].cart,
      Add: data[key].Add,
      image: data[key].image,
      id: data[key].id,
    });
  }

  const respone = await fetch(
    "https://categories-d4201-default-rtdb.firebaseio.com/Categories.json"
  );
  const data1 = await respone.json();

  let fetchedData: { Name: string; image: string; id: number; items: any }[] =
    [];
  for (const key in data1) {
    fetchedData.push({
      Name: data1[key].Name,
      image: data1[key].image,
      id: data1[key].id,
      items: data1[key].items,
    });
  }

  return {
    props: {
      Popular_Dishes: loadedData,
      Categories: fetchedData,
    },
  };
}
