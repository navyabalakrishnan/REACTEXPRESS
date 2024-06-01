import React, { useEffect, useState } from 'react';
import '../Profilestyle.css';
import axios from 'axios';
import UserProfile from '../Components/userProfile';

function ProfileCards() {
  const [users, setUsers] = useState([]);
  const [currentView, setCurrentView] = useState('profileCards');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = () => {
    axios.get("http://localhost:7000/getusersdata")
      .then((res) => {
        console.log('Fetched Users:', res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  const handleViewProfile = (user) => {
    console.log("Selected User:", user);
    setSelectedUser(user);
    setCurrentView('userProfile');
  };

  const handleBackToProfiles = () => {
    console.log("Navigating back to profile cards");
    setCurrentView('profileCards');
    setSelectedUser(null);
  };

  console.log("Current View:", currentView);

  if (currentView === 'userProfile' && selectedUser) {
    return <UserProfile user={selectedUser} onBack={handleBackToProfiles} />;
  }

  return (
    <div className=" app-container topstyle" id='app-container ' >
      <div className='content'>
        <h2>Learn more about the professionals who are the backbone of our success .</h2>
      </div>
      <div className="row">
        {users.map((user) => (
          <div key={user.username} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid profile-pic" src={user.image} alt="Profile" />
              </div>
              <div className="team-content">
                <h3 className="name">{user.fullName}</h3>
                <h4 className="title">{user.role}</h4>
              </div>
              <button
                className="btnknow"
                onClick={() => {
                  console.log("Button clicked for user:", user);
                  handleViewProfile(user);
                }}
              >
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileCards;
