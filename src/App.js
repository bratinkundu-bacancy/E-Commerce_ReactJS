
import { CssBaseline } from '@material-ui/core';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Products from './Components/Products/products';

function App() {

  const products = [
    { id: 1, name: "Product 1", price: "5000", description: "A sample first product", image: "https://image.cnbcfm.com/api/v1/image/106725307-1601554921056-surface-laptop-go.png?v=1601554930&w=1600&h=900" },
    { id: 2, name: "Product 2", price: "5000", description: "A sample second product", image: "http://i.dell.com/sites/csimages/Video_Imagery/all/xps_7590_touch.png" },
    { id: 3, name: "Product 3", price: "5000", description: "A sample third product", image: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ces/gaming-laptops/geforce-rtx-30-series-laptops-shop-630-d@2x.png" }
  ]

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Products products={products} />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;