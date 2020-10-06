import React from 'react';
import EventListStyle from './EventListStyle.css'
const ShowItem = (props) => {
    const { _id, title, imageUrl, description } = props.eventData;
    let key = Math.floor(Math.random() * 50);

    let color = '';
    if (key % 4 === 0) {
        color = 'bg-danger';
    } else if (key % 4 === 1) {
        color = 'bg-success';
    } else if (key % 4 === 2) {
        color = 'bg-warning';
    } else if (key % 4 === 3) {
        color = 'bg-info';
    }

    return (
        <div>
            <div className="card m-3 event-card">
                <img className="card-img-top" src={imageUrl} alt="Card img cap" />

                <div className={color}>
                    <div className="card-body text-center" >
                        <p className="card-title text-white"><b>{title}</b></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ShowItem;