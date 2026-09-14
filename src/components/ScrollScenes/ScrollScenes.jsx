import { Children, useEffect, useRef } from "react";
import "./ScrollScenes.css";

function ScrollScenes({ children }) {
  const rootRef = useRef(null);
  const scenes = Children.toArray(children);

  useEffect(() => {
    const root = rootRef.current;
    const sceneElements = Array.from(
      root.querySelectorAll(":scope > .scroll-scenes__viewport > .scroll-scenes__scene"),
    );
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = null;

    const resetScenes = () => {
      sceneElements.forEach((scene) => {
        scene.style.removeProperty("--scene-opacity");
        scene.style.removeProperty("--scene-scale");
        scene.style.removeProperty("--scene-blur");
        scene.removeAttribute("data-active");
        scene.removeAttribute("aria-hidden");
        scene.inert = false;
      });
    };

    const updateScenes = () => {
      animationFrame = null;

      if (reducedMotion.matches) {
        resetScenes();
        return;
      }

      const rect = root.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollDistance = Math.max(1, rect.height - viewportHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollDistance));
      const scenePosition = progress * (sceneElements.length - 1);

      sceneElements.forEach((scene, index) => {
        const distance = index - scenePosition;
        const visibleDistance = Math.min(1, Math.abs(distance));
        const isIncoming = distance > 0;
        const opacity = 1 - visibleDistance;
        const scale = isIncoming
          ? 0.68 + opacity * 0.32
          : 1 + visibleDistance * 0.42;
        const blur = visibleDistance * (isIncoming ? 24 : 18);
        const isActive = Math.abs(distance) < 0.5;

        scene.style.setProperty("--scene-opacity", opacity.toFixed(3));
        scene.style.setProperty("--scene-scale", scale.toFixed(3));
        scene.style.setProperty("--scene-blur", `${blur.toFixed(2)}px`);
        scene.toggleAttribute("data-active", isActive);
        scene.setAttribute("aria-hidden", String(!isActive));
        scene.inert = !isActive;
      });
    };

    const requestUpdate = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateScenes);
      }
    };

    const handleSceneLink = (event) => {
      if (reducedMotion.matches) return;

      const link = event.currentTarget;
      const sceneIndex = sceneElements.findIndex(
        (scene) => scene.querySelector(link.getAttribute("href")),
      );

      if (sceneIndex < 0) return;

      event.preventDefault();
      const rootTop = window.scrollY + root.getBoundingClientRect().top;
      const scrollDistance = Math.max(1, root.offsetHeight - window.innerHeight);
      const sceneOffset =
        sceneElements.length > 1
          ? (sceneIndex / (sceneElements.length - 1)) * scrollDistance
          : 0;
      window.scrollTo({
        top: rootTop + sceneOffset,
        behavior: "smooth",
      });
    };

    const sceneLinks = sceneElements.flatMap((scene) => {
      const section = scene.querySelector("section[id]");
      return section
        ? Array.from(document.querySelectorAll(`a[href="#${section.id}"]`))
        : [];
    });

    sceneLinks.forEach((link) => link.addEventListener("click", handleSceneLink));
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);
    requestUpdate();

    return () => {
      sceneLinks.forEach((link) =>
        link.removeEventListener("click", handleSceneLink),
      );
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="scroll-scenes"
      style={{
        "--scene-count": scenes.length,
        "--scene-scroll-height": `calc(100dvh + ${(scenes.length - 1) * 72}dvh)`,
      }}
    >
      <div className="scroll-scenes__viewport">
        {scenes.map((scene, index) => (
          <div
            className="scroll-scenes__scene"
            data-active={index === 0 ? "" : undefined}
            key={index}
          >
            {scene}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollScenes;
