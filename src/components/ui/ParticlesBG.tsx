import { useCallback } from "react";
import { Engine, ISourceOptions } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";


const options: ISourceOptions = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
        parallax: {
          enable: true,
          smooth: 10,
          force: 60,
      },
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 300,
        links: {
          opacity: 0.6,
          color: "#f071ea",
      },
      }
    },
  },
  particles: {
    color: {
      value: "#2d94f0",
    },
    links: {
      color: "#2d94f0",
      distance: 700,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: .5,
      straight: false,
    },
    number: {
      density: {
        enable: false,
      },
      value: 13,
    },
    opacity: {
      value: 0.3,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
  smooth: true,
};

const ParticlesBG = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      style={{position: "relative"}}
    />
  );
};

export default ParticlesBG;
