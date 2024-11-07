import React from "react";

const useAssetsLoaded = () => {
  const [assetsLoaded, setAssetsLoaded] = React.useState(false);

  const loadAssets = async (
    resources: (HTMLImageElement | HTMLVideoElement)[]
  ) => {
    setAssetsLoaded(false); // Resetear al iniciar la carga
    const promises = resources.map((resource) => {
      return new Promise<void>((resolve) => {
        if (resource instanceof HTMLImageElement) {
          resource.onload = () => resolve();
          if (resource.complete) resolve(); // Si ya estaba cargado
        } else if (resource instanceof HTMLVideoElement) {
          resource.oncanplaythrough = () => resolve();
          if (resource.readyState >= 4) resolve(); // Si ya estaba listo para reproducir
        }
      });
    });
    // Espera a que todos los recursos se carguen
    await Promise.all(promises);
    setAssetsLoaded(true); // Indica que todos los recursos están cargados
  };

  return {
    assetsLoaded,
    loadAssets,
  };
};

export { useAssetsLoaded };
