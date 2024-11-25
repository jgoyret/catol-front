import React, { createContext, useContext, useEffect, useState } from "react";

// Define el contexto
interface PageLoadContextType {
  isPageLoaded: boolean;
}

const PageLoadContext = createContext<PageLoadContextType>({
  isPageLoaded: false,
});

export const usePageLoad = () => useContext(PageLoadContext);

export const PageLoadProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Función para verificar si todos los recursos (imágenes, videos) han cargado
    const checkIfAllResourcesLoaded = () => {
      const allImages = Array.from(document.images); // Todas las imágenes
      const allVideos = Array.from(document.querySelectorAll("video")); // Todos los videos
      const allResources = [...allImages, ...allVideos];

      return Promise.all(
        allResources.map((resource) => {
          return new Promise<void>((resolve) => {
            // Verificamos si es una imagen
            if (resource instanceof HTMLImageElement) {
              if (resource.complete) {
                // Si la imagen ya está cargada
                resolve();
              } else {
                // Si no está cargada, esperamos el evento "load" o "error"
                resource.addEventListener("load", () => resolve(), {
                  once: true,
                });
                resource.addEventListener("error", () => resolve(), {
                  once: true,
                });
              }
            }
            // Verificamos si es un video
            else if (resource instanceof HTMLVideoElement) {
              if (resource.readyState >= 4) {
                // Si el video ya está completamente cargado
                resolve();
              } else {
                // Si no está cargado, esperamos el evento "loadeddata"
                resource.addEventListener("loadeddata", () => resolve(), {
                  once: true,
                });
                resource.addEventListener("error", () => resolve(), {
                  once: true,
                });
              }
            }
          });
        })
      );
    };

    // Monitorea cambios en el DOM dinámico
    const observer = new MutationObserver(() => {
      checkIfAllResourcesLoaded().then(() => {
        setIsPageLoaded(true); // Marca como cargado cuando todos los recursos lo estén
      });
    });

    observer.observe(document.body, {
      childList: true, // Monitorea hijos directos añadidos
      subtree: true, // Incluye elementos anidados
    });

    // Revisión inicial para elementos ya existentes
    checkIfAllResourcesLoaded().then(() => {
      setIsPageLoaded(true);
    });

    // Cleanup del observer
    return () => observer.disconnect();
  }, []);

  return (
    <PageLoadContext.Provider value={{ isPageLoaded }}>
      {children}
    </PageLoadContext.Provider>
  );
};
