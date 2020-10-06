import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import DatePicker from 'react-datepicker';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import Home from '../../Home/Home';


const AddEvent = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [eventInfo, setEventInfo] = useState({
        title: '',
        description: '',
        date: '',
        imageUrl: ''
    })

    const handleOnBlur = (e) => {
        const eName = e.target.name;
        const eValue = e.target.value;
        const newObject = { ...eventInfo }
        if (eName === 'title') {
            newObject.title = eValue;
        } else if (eName === 'description') {
            newObject.description = eValue;
        }
        newObject.date = startDate.toDateString().slice(0, 15);
        setEventInfo(newObject);
    }


    const handleFormSubmit = (e) => {
        console.log(eventInfo)
        fetch('https://powerful-sierra-66514.herokuapp.com//addNewEventItem', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    window.alert(" added successfully!")
                }else{
                    window.alert("already added!")
                }

            })
        e.preventDefault();
    }

    const uploadImage = (img) => {
        let body = new FormData()
        body.set('key', '487bbc78512fb205a6c29d2bb714749b')
        body.append('image', img)

        return Axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: body
        })
    }
    const upload = (e) => {
        uploadImage(e.target.files[0])
            .then(resp => {
                
                const newObject = { ...eventInfo }
                newObject.imageUrl = resp.data.data.thumb.url;
                setEventInfo(newObject);
            })
        e.preventDefault();
    }


    return (
        <div className="bg-light p-4 my-3">
            <p className="h4  mt-4">Add New Event</p>
            <div className="">
                <form onSubmit={handleFormSubmit}>
                    <div className="container fluid">
                        <div className="row">
                            <div className="col-md-6 col-6">
                                <label>Event Title</label>
                                <input onBlur={handleOnBlur} name="title" type="text" className="form-control" required/>
                                <br />

                                <label >Description</label>
                                <textarea onBlur={handleOnBlur} name="description" type="text" className="form-control" rows="3" required/>
                            </div>
                            <div className="col-md-6 col-6">
                                <div className="ml-5" >
                                    <label >Event Date</label>
                                    <br />
                                    <DatePicker onBlur={handleOnBlur} name="date" className="form-control red-border border-style" closeOnScroll={true} selected={startDate} calendarIcon onChange={date => setStartDate(date)} />

                                    <br /> <br /> <br />
                                    <label >Upload Event Banner Image : </label>
                                    <br />
                                    {
                                        eventInfo.imageUrl ? <img src={eventInfo.imageUrl} height="60" alt="" /> : <small className="text-mute">Image will be appeared here</small>
                                    }
                                    <br />
                                    <input onChange={upload} type="file" name="myFile" />
                                </div>
                                <br />
                                <div className="text-center ml-0">
                                    <button type="submit" className="btn btn-primary w-75">Add New</button>
                                </div>
                                <br/><br/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {/* <form action='https://powerful-sierra-66514.herokuapp.com//upload' method='post' encType="multipart/form-data"> */}

        </div>
    );
};

export default AddEvent;