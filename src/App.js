
import './App.scss';
import Banner from './components/banner/Banner';
import Cart from './components/cart/Cart';

import Deal from './components/deal/Deal';
import Delivery from './components/delivery/Delivery';
import Footer from './components/footer/Footer';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <div className='app-container'>
      <NavBar />
      <Banner />
      <Cart />
      <Delivery />
      <Deal />
      <Footer />
    </div>
  );
}

export default App;
