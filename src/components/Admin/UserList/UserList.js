import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import deleteIcon from '../../../logos/trash-2 9.png';

const UserList = () => {
    const [userList, setUserList] = useState([])
    const [state, setState] = useState(true);
    
    useEffect(() => {
        fetch(`https://powerful-sierra-66514.herokuapp.com//userEventList`)
            .then(res => res.json())
            .then(data => {
                setUserList(data)
            })
    }, [state])

    const history = useHistory()
    let currentLocation = useLocation()

    const handleDelete = (id) => {
        // console.log(id)
        fetch(`/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                setState(!state)
                window.alert('User deleted successfully!')
            }
        })
    }
    return (
        <div>
            <div className="mt-4 font-italic">Total {userList.length} volunteers found</div>
            <div className="d-flex flex-wrap p-4 my-4" style={{ height: '400px', overflow: 'auto' }}>
                <table class="table table-hover">
                    <thead>
                        <tr className="table-primary">
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Event Title</th>
                            <th scope="col">Event date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody style={{ height: "600px", overflow: 'auto' }}>
                        {
                            
                            userList.length > 0
                                ?
                                userList.map((each, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{each.name}</td>
                                        <td>{each.email}</td>
                                        <td>{each.eventTitle}</td>
                                        <td>{each.eventDate}</td>
                                        <td><button style={{ backgroundColor: 'red' }} onClick={() => handleDelete(each._id)}><img src={deleteIcon} height="20" /></button></td>
                                    </tr>
                                )
                                :
                                <h3 className="text-center">Loading...</h3>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;