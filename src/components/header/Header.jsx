import React from "react";
import classes from "./Header.module.css"

const Header = (props) => {
    return (
        <div className={classes.header}>
            <a className={classes.logo}>{props.title}</a>
        </div>
    )
};

export default Header;