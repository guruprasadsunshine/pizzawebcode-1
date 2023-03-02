import './App.css';
import Checkout from './Component/Checkout'

import  Home  from './Component/Home.js'
import  Signup  from './Component/Signup.js'
import  Login  from './Component/Login.js'
import  PizzasList  from './Component/PizzasList.js'
import  PizzaDetails  from './Component/PizzaDetails.js'
import AddPizzas from './Component/AddPizzas.js'
import Cart from './Component/Cart.js'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import  Ordersuccess  from './Component/Ordersuccess';
import  Notfound  from './Component/Notfound';



function App() {
const token = localStorage.getItem("Authorization")


  return (
    <div className="App">
    <Home/>
      <div className='router-container' >
        <ToastContainer/>
<BrowserRouter>
<Routes>
<Route path='/pizzas/menu' element={<PizzasList/>} ></Route>
<Route path='/' element={ <Login/> } ></Route>
<Route path='/' element={ <Home/> } ></Route>
<Route path='/user/Signup' element={ <Signup/> } ></Route>
<Route path='/user/Login' element={ <Login/> } ></Route>
<Route path='/pizzas/menu/:username' element={<PizzasList/>}></Route>
<Route path='/pizzas/menu/cart' element={ <Cart/> } ></Route>
<Route path='/pizzas/add' element={ <AddPizzas/> } ></Route>
<Route path='/pizzas/menu/:username/:id' element={<PizzaDetails/>  } ></Route>
<Route path="/pizzas/menu/cart/checkout/ordersuccess" element={ <Ordersuccess/> } ></Route>
<Route path='*' element={<Notfound/>} ></Route>
</Routes>
</BrowserRouter>
      </div>
    </div>
  );
}

export default App;
