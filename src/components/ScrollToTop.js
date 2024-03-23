import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const container = document.documentElement || document.body;
    container.style.scrollBehavior = "auto"; // Disable smooth scrolling temporarily
    window.scrollTo(0, 0); // Scroll to top
    container.style.scrollBehavior = "smooth"; // Re-enable smooth scrolling
  }, [pathname]);

  return null;
}