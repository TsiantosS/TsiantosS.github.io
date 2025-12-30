import { useEffect, useState } from "react";
import { ChevronUpIcon } from "lucide-react";

function ScrollUpButton() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      aria-hidden={!showTop}
      onClick={scrollToTop}
      className={`fixed bottom-15 right-15 p-3 bg-white rounded-full shadow-lg focus:outline-none transform-gpu z-100 
        transition-all duration-300 ease-in-out ${
        showTop
          ? "opacity-100 translate-y-0 scale-120 pointer-events-auto"
          : "opacity-0 translate-y-6 scale-95 pointer-events-none"
      }`}
    >
      <ChevronUpIcon className="w-5 h-5 text-black" />
    </button>
  );
}

export default ScrollUpButton;
