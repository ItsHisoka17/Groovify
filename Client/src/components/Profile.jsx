import React from "react";
import "../styles/Profile.css";

export default function Profile({ user }) {
  if (!user) {
    return (
      <div className="profile-card empty">
        <div className="profile-avatar skeleton" />
        <div className="profile-name skeleton short" />
        <div className="profile-meta skeleton short" />
      </div>
    );
  }

  return (
    <div className="profile-card">
      <div className="profile-avatar">
        <img src={user.image} alt={user.name} />
      </div>
      <div className="profile-body">
        <h3 className="profile-name">{user.name}</h3>
        <p className="profile-meta">{user.followers.toLocaleString()} followers</p>
        <div className="profile-actions">
          <a className="primary-link" href={user.url} target="_blank" rel="noreferrer">Open on Spotify</a>
        </div>
      </div>
    </div>
  );
}
