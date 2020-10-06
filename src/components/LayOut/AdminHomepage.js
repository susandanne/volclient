
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../logos/logo.png'
import AddEvent from '../Admin/AddEvent/AddEvent';
import EventListTable from '../Admin/EventListTable/EventListTable';
import UserIcon from '../../logos/users-alt 1.png';
import PlusIcon from '../../logos/plus 1.png';
import UserList from '../Admin/UserList/UserList';

const AdminHomepage = () => {
    let currentLocation = useLocation()
    
    return (
        <div>
            <nav className="navbar">
                <Link className="navbar-brand" to="/">
                    <img src={logo} height="50" alt="" />
                </Link>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="mt-3">
                            <Link to="/admin/user">
                                <p><span><img src={UserIcon} height="20" alt="" /> Volunteer Register List</span></p>
                            </Link>

                            <Link to="/admin">
                                <p><span><img src={PlusIcon} height="20" alt="" /> Add Event</span></p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-9 ">
                    {
                        currentLocation.pathname === '/admin'
                        &&
                        <>
                            <h4 className="mt-n5 font-weight-bold">Add Event</h4>
                            <div >
                                <AddEvent />
                            </div>
                            <div >
                                <EventListTable />
                            </div>
                        </>
                    }
                    {
                        currentLocation.pathname === '/admin/user'
                        &&
                        <div>
                            <h4 className="mt-n5 font-weight-bold">Volunteer Register List</h4>
                            <UserList/>
                        </div>
                        
                    }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminHomepage;