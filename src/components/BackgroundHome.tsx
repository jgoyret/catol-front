import React, { useEffect, useRef, useCallback } from "react";
// @ts-ignore
import Hydra from "hydra-synth";
import useDeviceType from "../hooks/useDeviceType";

const BackgroundHome: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hydraRef = useRef<any>(null);
  const isMobile = useDeviceType();

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const { innerWidth, innerHeight } = window;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;

      const ctx = canvas.getContext("2d");
      if (ctx) ctx.imageSmoothingEnabled = true;
    }
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const hydra = new Hydra({
        canvas: canvasRef.current,
        detectAudio: false,
        makeGlobal: false,
      });

      hydraRef.current = hydra;

      resizeCanvas();

      window.addEventListener("resize", resizeCanvas);

      // Define the animation
      const animate = () => {
        hydra.synth
          .osc(isMobile ? 5 : 10, 0.1, 0)
          .color(0.5, 0.5, 0.5)
          .rotate(0.1, 0.1)
          .modulate(hydra.synth.noise(3, 0.1))
          .modulateRotate(hydra.synth.osc(isMobile ? 5 : 10, 0.1, 0))
          .blend(
            hydra.synth
              .osc(isMobile ? 5 : 10, 0.1, 0)
              .color(0.5, 0.5, 0.5)
              .rotate(0.1, 0.1)
              .modulate(hydra.synth.noise(3, 0.1))
              .modulateRotate(hydra.synth.osc(isMobile ? 5 : 10, 0.1, 0))
              .thresh(0.52)
              .thresh(0.15)
          )
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

      window.removeEventListener("resize", resizeCanvas);
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

// const resizeCanvas = useCallback(() => {
//   const canvas = canvasRef.current;
//   if (canvas) {
//     const { innerWidth, innerHeight } = window;
//     const dpr = window.devicePixelRatio || 1;

//     canvas.width = innerWidth * dpr;
//     canvas.height = innerHeight * dpr;
//     canvas.style.width = `${innerWidth}px`;
//     canvas.style.height = `${innerHeight}px`;

//     const ctx = canvas.getContext("2d");
//     if (ctx) ctx.imageSmoothingEnabled = true;
//   }
// }, []);
