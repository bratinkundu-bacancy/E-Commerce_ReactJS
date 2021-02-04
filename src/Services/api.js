import axios from 'axios';

    const apiUrl = "http://localhost:3001/";

    const getAllProducts =  () => {
         return axios.get(apiUrl+"products");
    }

    const addProductToCart = (product) => {
        return axios.post(apiUrl+"cart/",product);
    }

    const getCartItems = () => {
        return axios.get(apiUrl+"cart");
    }
    
 export {getAllProducts, addProductToCart, getCartItems}

