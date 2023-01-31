import FoodObtion from "../components/Maincomponent/FoodOption";
import Head from "next/head";
const Review = () => {
    return ( <div className="text-white">
 <Head>
    <title>figos Resturant</title><meta
          content="Find the most amazing food in the world, we have all the various variety of foods.
           We are here to be your friend for life"
          name="Description"
        /></Head>
        <FoodObtion/>
    </div> );
}
 
export default Review;