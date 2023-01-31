import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {getProductThunk} from "../store/slices/product.slice"
import { Row, Col, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"


const Home = () => {

    const dispatch = useDispatch()
    const product = useSelector( state => state.product )

    useEffect( () => {
        dispatch( getProductThunk() )
    },[] )

    return(
        <div>
            <h1> Home </h1>

            <Row xs={1}  md={2}  lg={3} >

                {product?.map( product => (

                    <Col>
                    <Card >
                    <Card.Img variant="top" src={product.productImgs[0]} />
                    <Card.Body>
                    <Card.Title> 
                    {product.title} 
                    </Card.Title>
                    <Card.Text>
                    {product.price}
                    </Card.Text>
                    <Button variant="primary" as={ Link } to={ `/product/${product.id}` }   >See details</Button>
                    </Card.Body>
                    </Card>

                    </Col>


                )  )}


               
            </Row>
        </div>
    )

}

export default Home