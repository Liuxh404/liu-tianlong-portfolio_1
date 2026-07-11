import { useEffect } from "react";

export default function Modal({ isOpen, onClose, children, className = "" }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[5vh] touch-none">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] shadow-2xl ${className}`}
        onClick={(e) => e.stopPropagation()}
        style={{ touchAction: "pan-y" }}
      >
        <button
          onClick={onClose}
          className={`absolute top-2 md:top-4 right-2 md:right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full shadow-md transition-colors ${className.includes("bg-black") ? "bg-white/20 hover:bg-white/40 text-white" : "bg-gray-800 hover:bg-black text-white"}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div className={`w-full max-h-[90vh] overflow-y-auto ${className.includes("bg-black") ? "modal-scrollbar" : "modal-scrollbar-dark"}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
