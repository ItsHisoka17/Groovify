import "../styles/Artists.css";

export default function TopArtists({ artists }) {
  return (
    <div className="artists-container slide-up">
      <h3 className="section-title gradient-text">Your Top Artists</h3>
      <ul className="artists-list">
        {artists.map((artist, i) => (
          <li key={i} className="artist-card hover-scale">
            <img src={artist.image} alt={artist.name} className="artist-img" />
            <p className="artist-name">{artist.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
