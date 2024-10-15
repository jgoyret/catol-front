import { useState, useEffect } from "react";

const useDeviceType = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const checkDeviceType = () => {
    setIsMobile(window.innerWidth <= 768); // Ajusta el valor según tus necesidades
  };

  useEffect(() => {
    checkDeviceType(); // Comprobar al montar el componente

    window.addEventListener("resize", checkDeviceType); // Escuchar cambios de tamaño
    return () => window.removeEventListener("resize", checkDeviceType); // Cleanup
  }, []);

  return isMobile;
};

export default useDeviceType;
