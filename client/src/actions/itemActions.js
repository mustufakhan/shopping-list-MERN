import {GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING} from './type';
import axios from 'axios';

export const getItems=()=> dispatch =>{
  dispatch(setItemsloading());
  axios.get('/api/items')
  .then(res=>dispatch({
      type:GET_ITEMS,
      payload:res.data
  }))

}

export const addItems= item =>dispatch =>{
    dispatch(setItemsloading());
    axios.post('/api/items',item)
    .then(res=>dispatch({
        type:ADD_ITEMS,
        payload:res.data
    }))
}
export const deleteItems=(id)=>dispatch =>{
    dispatch(setItemsloading());
    axios.delete(`/api/items/${id}`)
    .then(res=>dispatch({
        type:DELETE_ITEMS,
        payload:id
    }))
}

export const setItemsloading=()=>{
    return{
        type:ITEMS_LOADING
    }
}