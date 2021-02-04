import { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Products from './Components/Products/products';
import {getAllProducts, addProductToCart, getCartItems} from './Services/api';


 function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProductList = async () => {
    const {data} = await getAllProducts();
    setProducts(data);
  }

  const fetchCart = async () => {
    const {data} = await getCartItems();
    setCart(data);
  }


  useEffect(() => {
    fetchProductList();
    fetchCart();
  }, [])


  const addToCart = (product) => {
    addProductToCart(product)
    .then((res)=>{
      setCart(res.data)
      fetchCart();
    });
  }

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar totalItems={cart.length}/>
        <Switch>
          <Route exact path="/">
            <Products products={products} addToCart={addToCart}/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;