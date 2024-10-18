import React, { useEffect, useRef } from "react";
// @ts-ignore
import Hydra from "hydra-synth";

const BackgroundHome: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hydraRef = useRef<any>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const hydra = new Hydra({
        canvas: canvasRef.current,
        detectAudio: false,
        makeGlobal: false,
      });

      hydraRef.current = hydra;

      // Define the animation
      const animate = () => {
        hydra.synth
          .osc(10, 0.1, 0)
          .color(0.5, 0.2, 0.5)
          .rotate(0.1, 0.1)
          .modulate(hydra.synth.noise(3, 0.1))
          .out();
      };

      // Start the animation
      animate();
    }

    return () => {
      if (hydraRef.current) {
        // Clean up Hydra instance
        if (
          hydraRef.current.synth &&
          typeof hydraRef.current.synth.destroy === "function"
        ) {
          hydraRef.current.synth.destroy();
        }
        hydraRef.current = null;
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundHome;
