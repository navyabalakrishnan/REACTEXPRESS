

import React from 'react';
import '../profile.css';

function UserProfile({ user, onBack }) {
  console.log("UserProfile Component Rendered with User:", user);

  return (
    <div className='profilestyle'>

      <div id="self">
        <img className="img-fluid profile-pic img-responsive" src={user.image} alt="Profile" />
      </div>
      <div id="about">

        <h1>Full Name: {user.fullName}</h1>
        <h2>Role: {user.role}</h2><br /><br />
        <p> ABOUT:{user.about}</p>

        <br /><div style={{ paddingLeft: 30 }}>
          <span id="email">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Envelope_font_awesome.svg/1024px-Envelope_font_awesome.svg.png" alt="Email icon" /> {user.email}
          </span>
          <span id="address">
            <img src="https://icons.iconarchive.com/icons/fa-team/fontawesome/512/FontAwesome-Location-Dot-icon.png" alt="Address icon" /> {user.address}
          </span></div>


        <div id='returnbtn' style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button onClick={onBack} className="back-button">Back to Profiles</button>
        </div>     </div>

    </div>
  );
}

export default UserProfile;

