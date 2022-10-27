import React from "react";
import classes from "./ProductList.module.css";
import ProductItem from "../productItem/ProductItem";

const ProductList = (props) => {
    return (
        <section className={ `container ${classes.sectionProducts}`}>
            <h2 style={{marginBottom: '3rem', textAlign: "start"}}>Products</h2>
            <div className="container">
                {props.productList.length > 0 ?
                    <div className="row">
                        {props.productList.map((item) => (
                            <ProductItem key={item.id}
                                         title={item.title}
                                         description={item.description}
                                         price={item.price}
                                         image={item.image}/>
                        ))}
                    </div>
                    :
                    <p>No hay productos</p>
                }
            </div>
        </section>
    )
}
export default ProductList;