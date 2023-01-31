import Contact_us from "../components/Maincomponent/contact";
import Head from "next/head";

const Contact = () => {
    return ( <div className="w-[90%] h-[60%] flex  items-center justify-center ">
         <Head>
            <title>Figos Resturant</title><meta
          content="Find the most amazing food in the world, we have all the various variety of foods.
           We are here to be your friend for life"
          name="Description"
        />
        </Head>
        <Contact_us/>

    </div> );
}
 
export default Contact;