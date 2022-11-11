import React from "react";
import classes from "./Header.module.css"
import {FaShoppingCart} from "react-icons/fa";

const Header = (props) => {
    return (
        <div className={`d-flex justify-content-between align-items-center ${classes.header}`}>
            <a className={classes.logo}>{props.title}</a>
            <button className="btn btn-outline-dark"  onClick={} title="Cart">
                <FaShoppingCart/>
                {props.listCart.length > 0 &&
                    <span className="badge bg-danger ms-2 text-white">{props.listCart.length}</span>}
            </button>
        </div>
    )
};

export default Header;

