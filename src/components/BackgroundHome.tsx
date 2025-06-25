import React, { useEffect, useRef, useCallback } from "react";
// @ts-ignore
import Hydra from "hydra-synth";
import useDeviceType from "../hooks/useDeviceType";
// import { useLocation } from "react-router-dom";

const BackgroundHome: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hydraRef = useRef<any>(null);
  const isMobile = useDeviceType();
  // const location = useLocation();

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const { innerWidth, innerHeight } = window;
      const dpr = window.devicePixelRatio || 1;

      // Ajusta el tamaño físico del canvas para alta resolución
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;

      // Ajusta el tamaño visual para ocupar toda la pantalla
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr); // Escala el contexto para coincidir con el DPR
        ctx.imageSmoothingEnabled = true;
      }
    }
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const hydra = new Hydra({
        canvas: canvasRef.current,
        detectAudio: false,
        makeGlobal: false,
        numSources: 1,
        numOutputs: 1,
        precision: "mediump",
      });

      hydraRef.current = hydra;

      resizeCanvas();

      window.addEventListener("resize", resizeCanvas);

      // Define the animation
      const animate = () => {
        hydra.synth.setResolution(innerWidth, innerHeight);
        hydra.synth
          .osc(isMobile ? 5 : 10, 0.1, 0)
          .color(1, 1, 1)
          .rotate(0.1, 0.1)
          .modulate(hydra.synth.noise(3, 0.1))
          .modulateRotate(hydra.synth.osc(isMobile ? 5 : 10, 0.1, 0))
          .blend(
            hydra.synth
              .osc(isMobile ? 5 : 10, 0.1, 0)
              .color(0.502, 0.502, 0.502)
              .rotate(0.1, 0.1)
              .modulate(hydra.synth.noise(3, 0.1))
              .modulateRotate(hydra.synth.osc(isMobile ? 5 : 10, 0.1, 0))
              .thresh(0.52)
              .thresh(0.15)
          )
          .brightness(0)
          .colorama(1)
          .out();
      };

      // Start the animation
      animate();

      const handleResize = () => {
        resizeCanvas();
        animate();
      };

      window.addEventListener("resize", handleResize);
    }

    // console.log("BackgroundHome");

    return () => {
      if (hydraRef.current) {
        try {
          const synth = hydraRef.current.synth;
          synth?.regl?.gl?.getExtension("WEBGL_lose_context")?.loseContext();
          synth?.regl?.destroy?.();
          synth?.pb?.destroy?.();
          synth?.destroy?.();
        } catch (err) {
          console.warn("Error al limpiar Hydra:", err);
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
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        display: "block",
      }}
    />
  );
};

export default BackgroundHome;
