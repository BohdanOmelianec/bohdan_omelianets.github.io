import { useCallback } from "react";
import { Engine, ISourceOptions } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";


const options: ISourceOptions = {
  background: {
    color: {
      value: "#0e0117",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 150,
      }
    },
  },
  particles: {
    color: {
      value: "#2d94f0",
    },
    links: {
      color: "#2d94f0",
      distance: 120,
      enable: true,
      opacity: 0.5,
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
        enable: true,
        area: 1900,
      },
      value: 200,
    },
    opacity: {
      value: 0.5,
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
    />
  );
};

export default ParticlesBG;
