import './App.css';
//! No longer use Switch | Instead use Routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

//* Pages
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

//* Components
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>

      <Router>
        <Navigation />
        <Routes>

          <Route path='/' exact element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>

        </Routes>
          <Footer/>
      </Router>

    </ApolloProvider>
  );
}

export default App;
