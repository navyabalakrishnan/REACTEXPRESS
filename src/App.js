import { React, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/navbar';
import ProfileCard from './Components/profileCards';
import LoginPage from './Components/loginPage';
import UserProfile from './Components/userProfile';
import { Container } from 'react-bootstrap';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div >
      <Router>
        <Container>
          <Routes>
            <Route
              path="/"
              element={<LoginPage onLogin={handleLogin} />}
            />
            <Route
              path="/profileCards"
              element={
                <>
                  <Navbar />
                  <ProfileCard />
                </>
              }
            />
           <Route path="/userProfile/:userId" element={<UserProfile />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;