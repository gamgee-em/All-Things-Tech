import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
        <Navigation />

        <Routes>
          <Route path='/home' exact component={Home}/>
        </Routes>

        <Footer/>
    </Router>
  );
}

export default App;
