import { useEffect, useRef } from "react";
import "./VideoPlaceholder.css";

function VideoPlaceholder({ label, description, variant = "landscape" }) {
  const placeholderRef = useRef(null);

  useEffect(() => {
    const element = placeholderRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = null;

    const clearScrollStyles = () => {
      element.style.removeProperty("--scroll-scale");
      element.style.removeProperty("--scroll-blur");
      element.style.removeProperty("--scroll-opacity");
      element.style.removeProperty("--scroll-saturation");
    };

    const updateScrollZoom = () => {
      animationFrame = null;

      if (reducedMotion.matches) {
        clearScrollStyles();
        return;
      }

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0, (viewportHeight - rect.top) / (viewportHeight + rect.height)),
      );
      const easedProgress =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      const distanceFromCenter = Math.abs(progress - 0.5) * 2;
      const startScale = variant === "portrait" ? 0.82 : 0.72;
      const endScale = variant === "portrait" ? 1.16 : 1.28;
      const scale = startScale + (endScale - startScale) * easedProgress;
      const blur = distanceFromCenter * (variant === "portrait" ? 6 : 10);
      const opacity = 1 - distanceFromCenter * 0.62;
      const saturation = 0.78 + (1 - distanceFromCenter) * 0.22;

      element.style.setProperty("--scroll-scale", scale.toFixed(3));
      element.style.setProperty("--scroll-blur", `${blur.toFixed(2)}px`);
      element.style.setProperty("--scroll-opacity", opacity.toFixed(3));
      element.style.setProperty("--scroll-saturation", saturation.toFixed(3));
    };

    const requestUpdate = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateScrollZoom);
      }
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [variant]);

  return (
    <div
      ref={placeholderRef}
      className={`video-placeholder video-placeholder--${variant} scroll-zoom-media`}
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
