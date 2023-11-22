import React from 'react';

const Card = () => {
    return (
            <div className="row">
                <div className="col-3 w-100 p-5">
                    <div className="card h-100">
                        <img className="card-img-top" src="https://picsum.photos/100/75" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Find out more!</a>
                    </div>
                </div>
                </div>
            </div>
                ) }

//
export default Card;