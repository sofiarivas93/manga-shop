import React, {useState} from 'react';
import Card from '../card/Card';
import classes from "./ProductItem.module.css";
import {FaShoppingCart} from "react-icons/fa";


const ProductItem = (props) => {
    const [counter, setCounter] = useState(0);

    const addCartHandler = () => {
        setCounter(prevState => prevState + 1);
        let product = {id: props.productId, title: props.title, price: props.price, count: counter + 1}
        props.onAddCart(product);
    }

    return (
        <Card>
            <div className={classes.singleProduct}>
                <div className={classes.options}
                     style={{backgroundImage: `url(${props.image})`, backgroundSize: 'cover', transition: 'all 0.3s'}}>
                    <button onClick={addCartHandler} title="Add to cart">
                        <FaShoppingCart/>
                    </button>
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