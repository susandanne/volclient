import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LandingPage from '../LayOut/LandingPage';
import ShowItem from './ShowItem';
import EventListStyle from './EventListStyle.css';

const EventList = () => {
    const [allEvent, setAllEvent] = useState([])

    useEffect(() => {
        fetch(`https://powerful-sierra-66514.herokuapp.com//allEvents`)
            .then(res => res.json())
            .then(data => {
                setAllEvent(data)
            })
    }, [])

    return (
        <div className="d-flex flex-wrap m-4">
            {
                allEvent.length > 0
                ?
                allEvent.map((each, index) => <Link className="" style={{textDecoration:'none', color: 'inherit'}} to={`/register/${each._id}`}><ShowItem key={index} eventData={each}/></Link> )
                :
                <h2>Loading data...</h2>
            }
        </div>
    );
};

export default EventList;