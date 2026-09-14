import "./VideoPlaceholder.css";

function VideoPlaceholder({ label, description, variant = "landscape" }) {
  return (
    <div
      className={`video-placeholder video-placeholder--${variant}`}
      role="img"
      aria-label={`Espaço reservado para vídeo: ${label}`}
    >
      <div className="video-placeholder__orb" aria-hidden="true" />

      <div className="video-placeholder__content">
        <span className="video-placeholder__status">Vídeo em preparação</span>
        <strong className="video-placeholder__label">{label}</strong>
        {description && (
          <span className="video-placeholder__description">{description}</span>
        )}
      </div>
    </div>
  );
}

export default VideoPlaceholder;
