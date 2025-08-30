import "../styles/Artists.css";

export default function Artists({ artists }) {
  return (
    <div className="artists-container">
      <h3>Your Top Artists</h3>
      <div className="artists-grid">
        {artists.map((a, i) => (
          <a href={a.url} key={i} className="artist-card" target="_blank" rel="noreferrer">
            <img src={a.image} alt={a.name} />
            <h4>{a.name}</h4>
          </a>
        ))}
      </div>
    </div>
  );
}
