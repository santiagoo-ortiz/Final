import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setIsloading } from "../store/slices/isLoading.slice"



const ProductDetail = () => {

    const { id } = useParams()

    const [ detail, setDetail ] = useState( {} ) 

    const dispatch = useDispatch()

    useEffect( () => {

        dispatch( setIsloading(true) )

        axios.get(`https://e-commerce-api.academlo.tech/api/v1/products/${id}`)
        .then( respuesta => setDetail(respuesta.data.data.products) )
        .catch( error => console.error(error))
        .finally( () => dispatch(setIsloading(false) ))
    },[] )
        

    return( 
    <div>
        <h1>ProductDetail</h1>
    </div>
    )

}

export default ProductDetail
