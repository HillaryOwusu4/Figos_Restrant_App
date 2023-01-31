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
            <script src="https://kit.fontawesome.com/e1926457f9.js" crossOrigin="anonymous"></script>
            
            
            </Head>
       
            <main className={classes.parent}>
            <Navbar/>
               {probs.children}
            </main>
</Cover>
     );
}
 
export default Mainpage;