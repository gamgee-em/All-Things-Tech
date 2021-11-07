import './App.css';
//! No longer use Switch | Instead use Routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//* Pages
import Home from './pages/Home';


//* Components
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
  return (
    <Router>

      <Navigation />

      <Routes>

        <Route path='/' exact element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>

      </Routes>

        <Footer/>

    </Router>
  );
}

export default App;
