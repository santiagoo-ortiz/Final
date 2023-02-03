import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { setIsloading } from "../store/slices/isLoading.slice"
import { filterCategoryThunk, getProductThunk } from "../store/slices/product.slice"
import { Col, Row, Button, ListGroup, Card, Carousel } from "react-bootstrap" 
import { Link } from "react-router-dom"
import { createCartThunk } from "../store/slices/cart.slide"



const ProductDetail = () => {

    const { id } = useParams()

    const [ detail, setDetail ] = useState(  ) 

    const dispatch = useDispatch()

    //const productRelated = useSelector( state => state.product )

    const allProduct = useSelector( state => state.product )

    const [productRelated, setProductRelated] = useState([])



    const [rate, setRate] = useState( 1 )

    const AddToCart = () => {
       const cart ={
        id: detail.id,
        quantity: rate 
       } 
       console.log(cart)

       dispatch( createCartThunk(cart) )
    }

    useEffect( () => {

        dispatch( getProductThunk() )

        dispatch( setIsloading(true) )

        axios.get(`https://e-commerce-api.academlo.tech/api/v1/products/${id}`)
        .then( 
            respuesta => {setDetail(respuesta.data.data.product)
                //dispatch(filterCategoryThunk( respuesta.data.data.product?.category?.id ))
                        setProductRelated(allProduct.filter( product => product.category.name === respuesta.data.data.product.category ))
                        
                }
             )
        .catch( error => console.error(error))
        .finally( () => dispatch(setIsloading(false) ))

    

      


    },[id] )
        

    return( 
    <div className="general-dt">
        <h2> {detail?.title} </h2>

        <div className="general-detail" >
        <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={detail?.productImgs[0]}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={detail?.productImgs[1]}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                   
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={detail?.productImgs[2]}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                       
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>

        <p> {detail?.description} </p>
        <p> <span> Price:</span> <br /> {detail?.price} </p>

        </div>

                    
        <Button onClick={AddToCart} > Add to cart </Button>

        <br />

        <div className="botones-gen-det" >
            <Button className="botones-detail" onClick={ () => setRate( rate - 1 ) } > - </Button>

                {rate}

            <Button className="botones-detail" onClick={ () => setRate( rate + 1 ) } > + </Button>
        </div>

        

       
    </div>
    )

}

export default ProductDetail
