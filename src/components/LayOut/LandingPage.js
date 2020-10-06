import React from 'react';
import Header from './Header';
import EventList from '../EventList/EventList';
import HeaderStyle from './LandingPageStyle.css';

const LandingPage = () => {
    return (
        <div className="set-background">
            <Header />
            <div >
                <div className="heading h2 mt-4 text-center">
                    I GROW BY HELPING PEOPLE IN NEED
                </div>
                <div className="d-flex justify-content-center align=items-center">
                    <div className="input-group m-2 p-2 w-50">
                        <input className="form-control my-0 py-1" type="text" placeholder="Search...." aria-label="Search" />
                        <div className="input-group-append">
                            <span className="input-group-text blue text-white" id="basic-text1"> Search </span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <EventList />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;