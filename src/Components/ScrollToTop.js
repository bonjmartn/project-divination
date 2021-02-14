import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Behavior to make links to new pages go to the top, from the React Router Documentation https://reactrouter.com/web/guides/scroll-restoration

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}