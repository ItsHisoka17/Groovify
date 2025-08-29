import "../styles/Profile.css";

export default function Profile({ user }) {
  console.log(user);
  return (
    <div className="profile-card">
      <img src={user.image} alt={user.name} className="profile-img" />
      <h2>{user.name}</h2>
      <p>{user.followers} followers</p>
      <a href={user.uri} target="_blank" rel="noreferrer">
        View on Spotify
      </a>
    </div>
  );
}
