import React from 'react'
import './style.css'


const Profile = () => {
  return (
    <div className="profile">
      <header>
        <h1>My Profile</h1>
      </header>
      <main>
          <img
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
            className="profile-picture"
          />
        <section className="profile-info">
          <h2>John Doe</h2>
          <p>Score:</p>
          <p>Rank:</p>
        </section>
      </main>
    </div>
  )
}

export default Profile