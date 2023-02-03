import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import { setIsloading } from "./isLoading.slice"


export const productSlice = createSlice({
    name: "product",
    initialState: [],
    reducers: {
        setProduct: (state, action) => {return action.payload }
    } 
})


export const getProductThunk = () => dispatch => {

    dispatch( setIsloading(true) )

    axios.get("https://e-commerce-api.academlo.tech/api/v1/products")
    .then(respuesta => dispatch(setProduct(respuesta.data.data.products)))
    .catch(error => console.error(error))
    .finally(() => dispatch( setIsloading(false) ))

}

export const filterCategoryThunk = ( id ) => (dispatch) => {

    dispatch( setIsloading(true) )

    axios.get(`https://e-commerce-api.academlo.tech/api/v1/products/?category=${id}`)
    .then(respuesta => dispatch(setProduct(respuesta.data.data.products)))
    .catch(error => console.error(error))
    .finally(() => dispatch( setIsloading(false) ))

}


export const { setProduct } = productSlice.actions;

export default productSlice.reducer