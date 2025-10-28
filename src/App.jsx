//import part
import React from 'react';
import Products from './Components/Products';
import phone from './assets/iphone.png';
import tab from './assets/tab.png';
import laptop from './assets/laptop.png';
const App = () => {
 
  return (
    //html and css part
    <div>
      <Products name="Iphone" price="$899" disc="This is iphone pro" image={phone} />
      <Products name="Tab" price="$999" disc="This is iphone pro" image={tab}/>
      <Products name="Laptop" price="$1300" disc="This is iphone pro" image={laptop}/>
    </div>
  );
};

//export part
export default App;