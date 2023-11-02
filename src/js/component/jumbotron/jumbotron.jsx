import React from 'react';


const jumbotron = () => {
    return (
        <div className="row position-relative">
            <div className="col-lg-7 position-absolute top-50 start-50 translate-middle">
                <div className="jumbotron bg-light mt-4 pb-5">
                    <h1 className="display-4 text-lg-left"><b>A Warm Welcome!</b></h1>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Labore et dolore magna aliqua.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                </div>
            </div>
        </div>
    )
}

export default jumbotron;


