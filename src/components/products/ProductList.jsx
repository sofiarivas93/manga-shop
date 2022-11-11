import React from "react";
import classes from "./ProductList.module.css";
import ProductItem from "../productItem/ProductItem";
import noProductsFound from "../../assets/images/noProductsFound.svg"

const ProductList = (props) => {
    const addCartHandler = (product) => {
        props.setCartList((prevSetCartList) => {
            return [
                ...prevSetCartList, {id: product.id, title: product.title, price: product.price, count: product.count}
            ];
        });
    }

    return (
        <section className={`container ${classes.sectionProducts}`}>
            <h2 style={{marginBottom: '3rem', textAlign: "start"}}>Products</h2>
            <div className="container">
                {props.productList.length > 0 ?
                    <div className="row">
                        {props.productList.map((item) => (
                            <ProductItem key={item.id}
                                         productId={item.id}
                                         title={item.title}
                                         description={item.description}
                                         price={item.price}
                                         image={item.image}
                                         onAddCart={addCartHandler}
                            />
                        ))}
                    </div>
                    :
                    <>
                        <img src={noProductsFound} style={{maxWidth: "10rem"}} alt="No products found icon"/>
                        <p style={{padding: "1rem"}}>No products found</p>
                    </>
                }
            </div>
        </section>
    )
}
export default ProductList;