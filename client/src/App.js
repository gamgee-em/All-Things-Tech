import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//* Pages
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';

//* Components
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <Router>
        <Navigation />

        <Routes>
          <Route path='/Home' exact element={<Home/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>

        <Footer/>
    </Router>
  );
}

export default App;
