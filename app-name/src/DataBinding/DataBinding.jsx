import { useState } from "react";
import './DataBinding.css';

export function DataBinding(){

   
    const [product] = useState({Name:"Samsung TV", Price: 50000, Stock:true, Cities:['Delhi', 'Hyd'], Rating:{Rate:4.2, Count:500}});
   

    return(
        <div>
            <h3>Product Details</h3>
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dt>Price</dt>
                <dd>{product.Price.toLocaleString('en-in',{style:'currency', currency:'INR'})}</dd>
                <dt>Stock</dt>
                <dd>{(product.Stock===true)?"Available":"Out of Stock"}</dd>
                <dt>Cities</dt>
                <dd>
                    <ul>
                        {
                            product.Cities.map((city, index)=> <li key={index}>{city}</li>)
                        }
                    </ul>
                </dd>
                <dt>Rating</dt>
                <dd>{product.Rating.Rate} [ {product.Rating.Count} ]</dd>
            </dl>
        </div>
    )
}
