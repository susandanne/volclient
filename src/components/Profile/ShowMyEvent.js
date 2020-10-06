import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

const ShowMyEvent = (props) => {
    const item = props.eventData;
    const [eventInfo, setEventInfo] = useState({})
    const location = useLocation()

    useEffect(() => {
        fetch(`https://dhrubo-s-volunteer-server.herokuapp.com/search/${item.eventId}`)
            .then(res => res.json())
            .then(data => {
                setEventInfo(data)
            })
    }, [])

    const history = useHistory();
    const handleCancel = (id) => {

        if (window.confirm('Do you want to remove this item?')) {
            fetch(`https://dhrubo-s-volunteer-server.herokuapp.com/deleteMyEvent/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    // props.handleDelete(true)
                    window.location.reload();
                    history.replace('/profile')
                }
            })
        }
    }
    return (
        <div>
            <div className="card m-4 event-card">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="view overlay py-2">
                                <img className="card-img-top" src={eventInfo.imageUrl} alt="Card cap" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h6 className="card-title">{eventInfo.title}</h6>
                                <span className="card-title">{eventInfo.date}</span> <hr />
                                <Link onClick={() => handleCancel(item._id)} to="#" className="btn btn-primary">Cancel</Link>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default ShowMyEvent;