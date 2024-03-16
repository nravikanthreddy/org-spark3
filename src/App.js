import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import './App.css'; // Import app.css file ravi
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import "@aws-amplify/ui-react/styles.css";



Amplify.configure(config);

const App = () => {
  return (
    <Router>
            <div className="banner">
                <NavLink exact to="/" className="banner-link">Home</NavLink>
                <NavLink to="/signin" className="banner-link">Sign In</NavLink>
            </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;