
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import '../profile.css';

function UserProfile() {
  const [profile, setProfile] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:7000/user?userId=${userId}`)
      .then(response => {
        setProfile(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the user details!', error);
      });
  }, [userId]);

  return (
    <div>
      {profile && (
        <div className='profilestyle'>
          <div id="self">
            <img className="img-fluid profile-pic img-responsive" src={profile.image} alt="Profile" />
          </div>
          <div id="about">
            <h1>Full Name: {profile.fullName}</h1>
            <h2>Role: {profile.role}</h2><br /><br />
            <p>ABOUT: {profile.about}</p>
            <br />
            <div style={{ paddingLeft: 30 }}>
              <span id="email">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Envelope_font_awesome.svg/1024px-Envelope_font_awesome.svg.png" alt="Email icon" /> {profile.email}
              </span>
              <span id="address">
                <img src="https://icons.iconarchive.com/icons/fa-team/fontawesome/512/FontAwesome-Location-Dot-icon.png" alt="Address icon" /> {profile.address}
              </span>
            </div>
            <div id='returnbtn' style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Link to="/profileCards">
                <button className="back-button">Back to Profiles</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
