import axios from 'axios';

const apiUrl = "http://localhost:3001/";

const getAllProducts = () => {
    return axios.get(apiUrl + "products");
}

const addProductToCart = (product) => {
    return axios.post(apiUrl + "cart/", product);
}

const getCartItems = () => {
    return axios.get(apiUrl + "cart");
}

const emptyCart = (productIds) => {
    try {
        productIds.forEach(element => {
             axios.delete(apiUrl + "cart/" + element);
        });
        return true;
    } catch (error) {
        return false;
    }   
}

const removeCartIem = (productId) => {
    return axios.delete(apiUrl + "cart/" + productId);
}

const updateCartQuantity = (productId, product, quantity) => {
    product.quantity = quantity;
    return axios.put(apiUrl+"cart/"+productId,product)
}

export { getAllProducts, addProductToCart, getCartItems, emptyCart, removeCartIem, updateCartQuantity }

