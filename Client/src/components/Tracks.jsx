import "../styles/Tracks.css";

export default function Tracks({ tracks }) {
  return (
    <div className="tracks-container">
      <h3>Your Top Tracks</h3>
      <div className="tracks-grid">
        {tracks.map((track, i) => (
          <a
            key={i}
            href={track.url}
            target="_blank"
            rel="noreferrer"
            className="track-card"
          >
            <img src={track.image} alt={track.name} />
            <div>
              <h4>{track.name}</h4>
              <p>{track.artists.join(", ")}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
