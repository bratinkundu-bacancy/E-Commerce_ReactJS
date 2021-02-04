import { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Products from './Components/Products/products';
import { getAllProducts, addProductToCart, getCartItems, emptyCart, removeCartIem, updateCartQuantity } from './Services/api';
import Cart from './Components/Cart/Cart';


 function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [subtotal, setsubtotal] = useState(0);

  const fetchProductList = async () => {
    const {data} = await getAllProducts();
    setProducts(data);
  }

  const fetchCart = async () => {
    const {data} = await getCartItems();
    setCart(data);
    if(data.length > 0){
      const price = data.map(item => parseInt(item.price * item.quantity))
      setsubtotal(price.reduce((a, b) => a + b)) 
    }
    else{
      setsubtotal(0)
    } 
  }


  useEffect(() => {
    fetchProductList();
    fetchCart();
  }, [])


  const addToCart = (product) => {
     product.quantity = 1 ;
    addProductToCart(product)
    .then((res)=>{
      setCart(res.data)
      fetchCart();
    });
  }

  const removeCartItems = async () =>{
    const result = await emptyCart(cart.map(item => item.id));
    if(result){
      await fetchCart(); 
      console.log(cart)
    }
  }

  const updateCartItems = (productId, product, quantity) => {
      updateCartQuantity(productId,product,quantity)
      .then((res) => {
        fetchCart();
      })
  }

  const removeCartItem = (product) => {
    product.quantity = 0;
    removeCartIem(product.id).then((res) => {
      fetchCart();
    })
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
          <Route exact path="/cart">
            <Cart cart={cart} removeCartItems={removeCartItems} subtotal={subtotal} removeCartItem={removeCartItem} updateCartItems={updateCartItems} />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;