import axios from "axios";

const API_URL = 'https://fakestoreapi.com/products/';

const getProducts = async () => {
    const res = await axios.get(API_URL);
    return res.data;
};

const productsService = {
    getProducts
};

export default productsService;