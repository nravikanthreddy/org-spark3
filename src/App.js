import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import './App.css'; // Import app.css file ravi

const App = () => {
  return (
    <Router>
            <div className="banner">
                <NavLink exact to="/" className="banner-link">Home</NavLink>
                <NavLink to="/signup" className="banner-link">Sign Up</NavLink>
                <NavLink to="/signin" className="banner-link">Sign In</NavLink>
            </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;