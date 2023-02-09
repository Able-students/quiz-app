import store from '../store';
import axios from 'axios'
import types from './types';

// 1 для асинхронных dispatch
export const loadProductList = () => async(dispatch) => {
    axios.get('https://fakestoreapi.com/products')
    .then(res => {
       dispatch({ type: types.SET_PRODUCT_LIST, payload: res.data })
    }).catch(e => {
        console.log(e.response);
    })
}  

// 2 для синхронных dispatch
export const setBasketList = (data) => { 
    store.dispatch({ type: "setBasketList", payload: data })
}  



export default {
    loadProductList,
    setBasketList
}