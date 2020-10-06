import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import ProfileHeader from './ProfileHeader';
import ShowMyEvent from './ShowMyEvent';

const Profile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); //------- global logged in user
    const { displayName, photo, email } = loggedInUser;

    const [myEvents, setMyEvents] = useState([])
    const [state, setState] = useState(true)

    useEffect(() => {
        fetch(`https://dhrubo-s-volunteer-server.herokuapp.com/userEventList/${email}`)
            .then(res => res.json())
            .then(data => {
                setMyEvents(data);
            })
    }, [state])

    const handleDelete=(props)=>{
        console.log(props)
        setState(!state)
    }
    return (
        <div>
            <ProfileHeader />
            <div className="container">
            <div className="d-flex mt-4">
                <h4>You have total {myEvents.length} events </h4>
                <Link to='/' className="ml-auto mt-1">
                    <p>Click here to register for new event.</p>
                </Link>
            </div>
            <div className="d-flex flex-wrap m-4 p-4">
                {
                    myEvents.map(each => <ShowMyEvent handleDelete={handleDelete} eventData={each} />)
                }
                </div>
            </div>

        </div>
    );
};

export default Profile;