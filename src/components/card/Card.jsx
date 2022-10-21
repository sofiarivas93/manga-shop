import React from 'react';

const Card = (props) => {
    const classes =" card " + props.className;
    return (
        <div className="col-md-6 col-lg-4 col-xl-3">
            {props.children}
        </div>
    )
}
export default Card;