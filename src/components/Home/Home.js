import React, { useEffect, useState } from 'react';
import AdminHomepage from '../LayOut/AdminHomepage';
import deleteIcon from '../../logos/trash-2 9.png';

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://powerful-sierra-66514.herokuapp.com//allEvents`)
            .then(res => res.json())
            .then(data => {
                console.log(data.length, data)
                setData(data)
            })
    }, [])

    const handleDelete = (id) => {
        console.log(id)
        fetch(`/deleteItem/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Item deleted successfully!!!!!")
                    return <Home/>
                }
            })
        
        return <AdminHomepage/>
    }

    return (
        <div className="d-flex flex-wrap"  style={{height:'600px', overflow:'auto'}}>
            <table class="table table-hover">
                <thead>
                    <tr className="table-primary">
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody style={{ height: "600px", overflow: 'auto' }}>

                    {
                        data.slice(0).reverse().map((each, index) =>
                            <tr>
                                <td>{index+1}</td>
                                <td><img src={each.imageUrl} height="30" style={{borderRadius:'50%'}} alt="" /></td>
                                <td>{each.title}</td> 
                                <td>{each.date}</td>  
                                <td><button style={{backgroundColor:'red'}} onClick={() => handleDelete(each._id)}><img src={deleteIcon} height="20" /></button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    );
};

export default Home;