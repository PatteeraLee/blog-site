import React from 'react';
import Navbar from './components/Navbar/Navbar'
import ShopList from './components/ShopList'
import "./style.css"

function App() {
  return (
    <div style={{backgroundImage:"url('https://images.pexels.com/photos/162993/food-thai-spicy-asian-162993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" ,backgroundRepeat:"no-repeat",backgroundSize:"100% 600px"}}>
        <Navbar/>
        <ShopList/>
      </div>
  );
}

export default App;
