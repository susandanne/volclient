import { MDBContainer } from 'mdbreact';
import React from 'react';
import AddEvent from '../Admin/AddEvent/AddEvent';
import Home from '../Home/Home';

const Homepage = () => {
    return (
        <div>
            <MDBContainer>
                <div className="row">
                    <div className="col-md-6 ">
                        <AddEvent />
                    </div>
                    <div className="col-md-6">
                        <div >
                            <Home />
                        </div>
                    </div>
                </div>
            </MDBContainer>
        </div>
    );
};

export default Homepage;