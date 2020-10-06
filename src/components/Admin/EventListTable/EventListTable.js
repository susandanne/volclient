import React, { useEffect, useState } from 'react';
import deleteIcon from '../../../logos/trash-2 9.png';
const EventListTable = () => {
    const [data, setData] = useState([])
    const [state, setState] = useState(true);

    useEffect(() => {
        fetch(`https://powerful-sierra-66514.herokuapp.com//allEvents`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.length, data)
                setData(data)
            })
    }, [state])

    const handleDelete = (id) => {
        // console.log(id)
        fetch(`/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    refreshTable();
                    alert("Item deleted successfully!")
                }
            })
    }

    const refreshTable = () => {
        setState(!state);
    }

    return (
        <div>

            <div className="d-flex">
                <h4>List of All Events - Total {data.length}</h4>
                <button className="btn color-inherit ml-auto text-dark mb-2" onClick={refreshTable}><i class="fas fa-sync"></i> &nbsp; &nbsp; Refresh</button>
            </div>
            <div className="d-flex flex-wrap" style={{ height: '400px', overflow: 'auto' }}>

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
                                    <td>{index + 1}</td>
                                    <td><img src={each.imageUrl} height="30" style={{ borderRadius: '50%' }} alt="" /></td>
                                    <td>{each.title}</td>
                                    <td>{each.date}</td>
                                    <td><button style={{ backgroundColor: 'red' }} onClick={() => handleDelete(each._id)}><img src={deleteIcon} height="20" /></button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default EventListTable;