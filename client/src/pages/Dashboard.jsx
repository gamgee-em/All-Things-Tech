import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';
import { Main } from './PagesElements';

const Dashboard = () => {

    const { username: userParam } = useParams();
    const { loading, data } = useQuery(userParam ? QUERY_SINGLE_USER : QUERY_ME, {
        variables: { username: userParam },
    });
    const user = data?.me || data?.username || {};
    // redirect to personal dashboard if username matches
    if (Auth.loggedIn() && Auth.getUser().data.username === userParam) {
        return <Navigate to='/me' />
    }

    if (loading) {
        return <div> Loading... </div>
    }

    if (!user?.username) {
        return (
            <h1>
                Please login to access your Dashboard!
            </h1>
        )
    }

    //! add to helper file later
    const capitalizeUser = (user) => {
        return `${user.charAt(0).toUpperCase()}${user.slice(1)}`;
    }

    return ( 

            <Main>
      
                <h1> Dashboard { capitalizeUser(user.username) } </h1>

                
            </Main>
     );
}
 
export default Dashboard;