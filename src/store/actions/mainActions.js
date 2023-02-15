import store from '../store';
import axios from 'axios'
import types from './types';

// 1 для асинхронных dispatch
export const loadProductList = (attepmt = 0) => async(dispatch) => {
    axios.get('https://fakestoreapi.com/products')
    .then(res => {
       dispatch({ type: types.SET_PRODUCT_LIST, payload: res.data })
    }).catch(e => {
        attepmt++;
        if(attepmt < 3){
            dispatch(loadProductList(attepmt))
        }else{
            dispatch({type: types.SET_ERROR, payload: '404'})
        }
    })
}  

// 2 для синхронных dispatch
export const setBasketList = (data) => { 
    store.dispatch({ type: "setBasketList", payload: data })
}  


export const loadMovieList = (setMovieList, page = 1) => async(dispatch) => {
    axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=2bc06158cec438c68a78d1754264f9f4&language=en-US&page=' + page)
    .then(res => {
        setMovieList(res.data)
    }).catch(() => {
        dispatch({type: types.SET_ERROR, payload: '404'})
    })
}


const actions = {
    loadProductList,
    setBasketList,
    loadMovieList
}

export default actions;