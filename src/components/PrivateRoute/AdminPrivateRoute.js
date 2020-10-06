import React, { useContext, useEffect } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { AdminContext, UserContext } from '../../App';

const AdminPrivateRoute = ({ children, ...rest }) => {
    const history = useHistory();
    const [loggedInAdmin, setLoggedInAdmin] = useContext(AdminContext);


    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    loggedInAdmin.email
                        ? (children)
                        :
                        (
                            <Redirect
                                to={{
                                    pathname: "/adminLogin",
                                    state: { from: location }
                                }}
                            />
                        )
                }
            />
        </div>
    );
};

export default AdminPrivateRoute;