import "../styles/Profile.css";

export default function Profile({ user }) {
  return (
    <div className="profile-card">
      <div className="profile-img-wrapper">
        <img src={user.image} alt={user.name} className="profile-img" />
      </div>
      <h2>{user.name}</h2>
      <p>{user.followers} followers</p>
      <a href={user.url} target="_blank" rel="noreferrer">View on Spotify</a>
    </div>
  );
}
