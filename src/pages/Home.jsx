import React from 'react';
import './Home.css';
import profilePic from '../assets/image.jpg'; // adjust path if needed

function Home() {
  return (
    <div className="home">
      <img src={profilePic} alt="Sateesh Kumar" className="profile-photo" />
      <h1>Welcome to My Portfolio</h1>
      <p>Hello, I’m Sateesh Kumar, a passionate learner diving deep into React and full-stack development.</p>
    </div>
  );
}

export default Home;
