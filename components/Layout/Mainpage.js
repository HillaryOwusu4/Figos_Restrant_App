import Cover from "./Cover";
import classes from '../Layout/Mainpage.module.css'
import Head from "next/head";
import Navbar from "./Navbar";
const Mainpage = (probs) => {
    return ( 
<Cover>
<Head>
            <script src="https://kit.fontawesome.com/e1926457f9.js" crossorigin="anonymous"></script>
            
            
            </Head>
       
            <main className={classes.parent}>
            <Navbar/>
               {probs.children}
            </main>
</Cover>
     );
}
 
export default Mainpage;