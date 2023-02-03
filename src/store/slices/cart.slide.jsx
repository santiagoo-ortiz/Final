import { createSlice } from "@reduxjs/toolkit";
import { setIsloading } from "./isLoading.slice"
import axios from "axios"
import getConfig from "../../utils/getConfig";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        setCart: (state, action) => { action.payload }
      
    } 
})

export const getCartThunk = () => (dispatch) => {

    dispatch( setIsloading(true) )

    axios
    .get(`https://e-commerce-api.academlo.tech/api/v1/cart`, getConfig())
    .then(respuesta => dispatch( setCart( respuesta.data.data.cart)) )
    .catch(error => console.error(error))

    .finally(() => dispatch( setIsloading(false) ))
}

export const createCartThunk = ( id ) => (dispatch) => {

    dispatch( setIsloading(true) )

    axios
    .post(`https://e-commerce-api.academlo.tech/api/v1/cart`, id, getConfig())
    .then(respuesta => dispatch(getCartThunk( )))
    .catch(error => console.error(error))

    .finally(() => dispatch( setIsloading(false) ))

}




export const { setCart } = cartSlice.actions

export default cartSlice.reducer