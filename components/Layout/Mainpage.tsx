import Cover from './Cover'
import classes from '../Layout/Mainpage.module.css'
import Head from "next/head";
import Navbar from './Navbar'
import { useSelector } from 'react-redux';
const Mainpage = (probs:any) => {
    // let token = useSelector((state:any)=>state.Cart.token)
    
    return ( 
<Cover>
<Head>
    
<script src="https://kit.fontawesome.com/6565e8edc1.js" ></script>
            </Head>
       
            <main className={classes.parent}>
            <Navbar/>
               {probs.children}
            </main>
</Cover>
     );
}
 
export default Mainpage;