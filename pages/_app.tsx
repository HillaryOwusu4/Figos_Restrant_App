import '../styles/globals.css'
import Mainpage from '../components/Layout/Mainpage'
import { Provider } from "react-redux";
import { store,wrapper } from '../components/store/redux';

function App({ Component, pageProps }:any) {
  return( <Mainpage>
    <Provider store={store}> 
    
      <Component {...pageProps} />
      </Provider>
     
     </Mainpage>);
}

export default wrapper.withRedux(App);