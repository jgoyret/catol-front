import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { menuItems } from "../data/data";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = React.useState(true);
  const [showIcon, setShowIcon] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    setShowIcon(true);

    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const getCurrentIcon = () => {
    const currentPath = location.pathname;

    // Show CATOL for home route
    if (currentPath === "/") {
      return (
        <h1 className="text-4xl md:text-8xl font-mattoneBold font-bold tracking-widest text-black">
          CATOL
        </h1>
      );
    }

    const menuItem = menuItems.find((item) => {
      if (item.path) {
        return item.path === currentPath;
      }
      if (currentPath.startsWith("/project/")) {
        return (
          `/project/${item.id}` === currentPath ||
          (item.id === "zona-de-derrama" &&
            currentPath.startsWith("/project/zona-de-derrama"))
        );
      }
      return false;
    });

    if (!menuItem?.icon) return null;

    const IconComponent = menuItem.icon;
    return <IconComponent className="w-1/2" />;
  };

  return (
    <AnimatePresence mode="wait">
      {showIcon && isLoading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onAnimationComplete={() => {
            if (!isLoading) {
              setShowIcon(false);
            }
          }}
          className="fixed inset-0 flex items-center justify-center bg-slate-100 z-50 "
        >
          {getCurrentIcon()}
        </motion.div>
      ) : (
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
