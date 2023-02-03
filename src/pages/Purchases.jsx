import axios from "axios"
import { useState, useEffect } from "react"
import getConfig from "../utils/getConfig"


const Purchases = () => {

    const [purchases, setPurchases] = useState([])

    useEffect( () => {

            axios.get("https://e-commerce-api.academlo.tech/api/v1/purchases", getConfig() )
            .then( respuesta => {setPurchases(respuesta.data.data.purchases)
            console.log(respuesta.data.data.purchases)} )
            .catch( error => console.error(error)  )
           

    }, [] )

    return( 
    <div className="div-purchases">
        <h1 className="titles" >Purchases</h1>
        {
            purchases.map( item => { 
                return item.cart.products?.map( item =>  
                <div>  
                    <li className="list-purchases">  <span>{item.title}</span> <br /> {item.updatedAt} <br /> {item.price}  </li> 
                 </div> )
             } )
        }

    
    </div>
    )

}

export default Purchases