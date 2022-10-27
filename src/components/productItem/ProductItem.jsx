import React from 'react';
import Card from '../card/Card';
import classes from "./ProductItem.module.css";
import {FaShoppingCart} from "react-icons/fa";

const ProductItem = (props) => {
    return (
        <Card>
            <div className={classes.singleProduct}>
                <div className={classes.options} style={{backgroundImage: `url(${props.image})`, backgroundSize: 'cover', transition: 'all 0.3s'}}>
                    <ul>
                        <li><a href="#"><FaShoppingCart/></a></li>
                    </ul>
                </div>
                <div className="part-2">
                    <h3 className={classes.productInfo}>{props.title}</h3>
                    <p>{props.description}</p>
                    <h4 className="product-price">${props.price}</h4>
                </div>
            </div>
        </Card>
    )

}
export default ProductItem;