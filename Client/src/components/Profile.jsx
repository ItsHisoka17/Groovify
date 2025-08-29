import "../styles/Profile.css";

export default function ProfileCard({ user }) {
  return (
    <div className="profile-card bounce-in">
      <a href={user.url} target="_blank" rel="noreferrer">
        <img src={user.image} alt="Profile" className="profile-img glow" />
      </a>
      <h2 className="profile-name gradient-text">{user.name}</h2>
      <p className="profile-followers">{user.followers} followers</p>
    </div>
  );
}
