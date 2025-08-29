import "../styles/Tracks.css";

export default function TopTracks({ tracks }) {
  return (
    <div className="tracks-container slide-up">
      <h3 className="section-title gradient-text">Your Top Tracks</h3>
      <ul className="tracks-list">
        {tracks.map((track, i) => (
          <li key={i} className="track-card hover-scale">
            <img src={track.image} alt={track.name} className="track-img" />
            <div className="track-info">
              <p className="track-name">{track.name}</p>
              <p className="track-artist">{track.artists.join(" ")}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
