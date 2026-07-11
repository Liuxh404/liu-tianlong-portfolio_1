import { useState, useEffect } from "react";
import PortfolioModal from "./components/PortfolioModal";
import MCNModal from "./components/MCNModal";

export default function App() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isMCNOpen, setIsMCNOpen] = useState(false);

  useEffect(() => {
    const preloadImages = [
      "/portfolio.jpg",
      "/mcn.jpg"
    ];
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center overflow-x-hidden py-4">
      <div className="relative max-w-[1200px] w-full mx-2 md:mx-0">
        <img
          src="/resume.jpg"
          alt="刘天龙个人简历"
          className="w-full h-auto block rounded-sm shadow-md"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div className="hidden flex-col items-center justify-center min-h-[600px] bg-gray-200 text-gray-500 p-8">
          <p className="text-lg mb-2">请将简历原图命名为 resume.jpg</p>
          <p className="text-sm">放入 public/ 目录后刷新页面</p>
        </div>

        <button
          onClick={() => setIsPortfolioOpen(true)}
          className="absolute group cursor-pointer touch-manipulation active:scale-95 transition-transform"
          style={{
            top: "46.2%",
            left: "88.6%",
            width: "10%",
            height: "5%",
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "4px",
            minWidth: "40px",
            minHeight: "40px",
          }}
          title="查看作品集"
        >
          <span className="block w-full h-full rounded transition-colors group-hover:bg-red-500/20" />
        </button>

        <button
          onClick={() => setIsMCNOpen(true)}
          className="absolute group cursor-pointer touch-manipulation active:scale-95 transition-transform"
          style={{
            top: "76.5%",
            left: "89.2%",
            width: "10%",
            height: "5%",
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "4px",
            minWidth: "40px",
            minHeight: "40px",
          }}
          title="点击详情"
        >
          <span className="block w-full h-full rounded transition-colors group-hover:bg-red-500/20" />
        </button>
      </div>

      <PortfolioModal
        isOpen={isPortfolioOpen}
        onClose={() => setIsPortfolioOpen(false)}
      />
      <MCNModal
        isOpen={isMCNOpen}
        onClose={() => setIsMCNOpen(false)}
      />
    </div>
  );
}
