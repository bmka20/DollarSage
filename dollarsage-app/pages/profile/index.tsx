"use client"
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';

const Profile = () => {
  const { data: session }: any = useSession();
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target) {
          setProfilePicture(event.target.result as string);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile">
      <main>
        <input
          type="file"
          accept="image/*"
          id="profile-picture-input"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <label
          htmlFor="profile-picture-input"
          className="cursor-pointer"
        >
          <img
            src={profilePicture || 'https://via.placeholder.com/150'}
            alt="Profile Picture"
            className="profile-picture mx-auto my-5 rounded-full w-40 h-40" // Added width and height classes
          />
        </label>
        <section className="profile-info bg-white rounded-lg shadow-md p-4 mt-5 text-center">
          <h2 className="text-2xl font-semibold mb-2">Hello {session?.user?.fullName}!</h2>
          <p className="text-lg mb-2">Score: 0</p>
          <p className="text-lg mb-2">Rank: 2</p>
        </section>
      </main>
      <footer className="text-xs mt-5">© 2023 My Profile</footer>
    </div>
  );
};

export default Profile;
