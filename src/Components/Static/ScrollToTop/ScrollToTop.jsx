import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-6 right-6
        z-20
        flex h-12 w-12
        items-center justify-center
        rounded-full
        bg-(--primary)
        text-black
        shadow-lg
        transition-all duration-300
        hover:scale-110
        cursor-pointer
      "
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
}