import "../styles/Artists.css";

export default function Artists({ artists }) {
  return (
    <div className="artists-container">
      <h3>Your Top Artists</h3>
      <div className="artists-grid">
        {artists.map((artist, i) => (
          <a
            key={i}
            href={artist.url}
            target="_blank"
            rel="noreferrer"
            className="artist-card"
          >
            <img src={artist.image} alt={artist.name} />
            <h4>{artist.name}</h4>
          </a>
        ))}
      </div>
    </div>
  );
}
