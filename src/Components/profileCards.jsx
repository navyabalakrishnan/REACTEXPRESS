import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Profilestyle.css';
import axios from 'axios';


function ProfileCards() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = () => {
    axios.get("http://localhost:7000/getuserdata")
      .then((res) => {
        console.log('Fetched Users:', res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

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
              <Link to={`/userProfile/${user.userId}`}>
                <button className="btnknow">View Profile</button>
              </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileCards;

