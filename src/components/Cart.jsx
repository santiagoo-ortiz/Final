import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState, useEffect } from "react"
import axios from 'axios';
import getConfig from '../utils/getConfig';




const Cart = ( {show, handleClose}) => {

    const [cart, setCart] = useState([])

    useEffect( () => {
        axios
        .get("https://e-commerce-api.academlo.tech/api/v1/cart", getConfig())
        .then( respuesta => {setCart(respuesta.data.data.cart.products)
        console.log(respuesta.data.data.cart.products)})
        .catch(error => console.error(error) )
    },[ show ])

    const checkoutCart = () => {

        axios.post("https://e-commerce-api.academlo.tech/api/v1/purchases", {
            "street": "Green St. 1456",
            "colony": "Southwest",
            "zipCode": 12345,
            "city": "USA",
            "references": "Some references"
        }, getConfig())
        .then( () => setCart([]) )
        .catch(error => console.error(error) )
    }

    

    return (

      <div className='container-cart' >

          <Offcanvas show={show} onHide={handleClose} placement={"end"} >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='titles' > Cart </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    { 

                      cart.length!== 0
                      ?
                      
                      cart?.map( product => (
                      <li key={product.id} > {product.title} </li>
                    ) )
                      :
                      <h2> No hay productos seleccionados </h2>
                    
                    }

                    <Button onClick={checkoutCart}
                    disabled={cart.length === 0} > Checkout </Button>
                  </Offcanvas.Body>
                </Offcanvas>

      </div>
        
    )
}
export default Cart