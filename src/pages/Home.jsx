import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {getProductThunk, filterCategoryThunk  } from "../store/slices/product.slice"
import { Row, Col, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import axios from "axios"


const Home = () => {

    const dispatch = useDispatch()
    const product = useSelector( state => state.product )
    const [categories, setCategories] = useState([])


    useEffect( () => {
        dispatch( getProductThunk() )

        axios.get(`https://e-commerce-api.academlo.tech/api/v1/products/categories`)
        .then( respuesta => setCategories(respuesta.data.data.categories) )
        .catch( error => console.error(error) )
        
    },[] )

    return(
        <div>
            <h1 className="titles" > Home </h1>

            <div className="container-home" >

            {categories.map( category => (
                <Button className="button-home"  key = {category.id}
                onClick={ () =>  dispatch( filterCategoryThunk(category.id) ) }
                > 
                    {category.name} </Button>
            ) )}

            <Row xs={1}  md={2}  lg={3}  >

                {product?.map( product => (

                    <Col key={product.id} >
                    <Card className="card-home"  >
                    <Card.Img variant="top" src={product.productImgs[0]} />
                    <Card.Body>
                    <Card.Title  className="title.card" > 
                    {product.title} 
                    </Card.Title>
                    <Card.Text className="text-card" >
                    {product.price}
                    </Card.Text>
                    <Button   variant="primary" as={ Link } to={ `/product/${product.id}` }   >See details</Button>
                    </Card.Body>
                    </Card>

                    </Col>


                )  )}


               
            </Row>

            </div>

            
        </div>
    )

}

export default Home