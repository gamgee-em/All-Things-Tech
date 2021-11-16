import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';
import { Main } from './PagesElements';

const Home = () => {
    
    const { loading, data } = useQuery(QUERY_USERS);
    
    //const users = data?.users || [];

    //console.log('Users:', users);

    return ( 
        <Main className="bg-primary">
        
            { loading ? (
                <h1> Loading... </h1>
            ) : (
                
                <h1> Welcome To All Things Tech </h1>

            )}

        </Main>
     );
}
 
export default Home;