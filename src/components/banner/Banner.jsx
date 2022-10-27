import React from "react";
import logoMs from "../../assets/images/logoMs.png";
import classes from "./Banner.module.css"


const Banner = () => {
    return (
        <>
            <div className="container col-xxl-8 px-4 py-5 my-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 rounded-3 border shadow-lg">
                    <div className="col-lg-8">
                        <h3 className="display-5 fw-bold lh-1 mb-3">
                            Welcome to the Manga Shop!
                        </h3>
                        <p className="lead">
                            We hope you find your next great Manga read. Keep coming back as we add new adventures all
                            the
                            time to discover!
                        </p>
                    </div>
                    <div  className={`col-lg-4 ${classes.display}`} style={{marginTop:'20px', marginBottom:'20px'}}>
                        <img src={logoMs} alt="Manga Shop Logo" className="img-fluid" width="200" height="200"></img>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Banner;
