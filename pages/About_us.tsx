import AboutUs from '../components/Maincomponent/AboutUs'
import Head from 'next/head';
const About_us = () => {
    return (<div className="w-[90%] h-[80%]">
        <Head>
            <title>Figos Resturant</title>
            <meta
          content="Find the most amazing food in the world, we have all the various variety of foods.
           We are here to be your friend for life"
          name="Description"
        />
        </Head>
        <AboutUs />
    </div>);
}

export default About_us;