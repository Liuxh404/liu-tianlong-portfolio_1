import { useState } from "react";
import PortfolioModal from "./components/PortfolioModal";
import MCNModal from "./components/MCNModal";

export default function App() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isMCNOpen, setIsMCNOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex justify-center overflow-x-hidden">
      <div className="relative w-full max-w-[1200px]">
        <img
          src="/resume.jpg"
          alt="刘天龙个人简历"
          className="w-full h-auto block"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div className="hidden flex-col items-center justify-center min-h-[600px] bg-gray-100 text-gray-500 p-8">
          <p className="text-lg mb-2">请将简历原图命名为 resume.jpg</p>
          <p className="text-sm">放入 public/ 目录后刷新页面</p>
        </div>

        <button
          onClick={() => setIsPortfolioOpen(true)}
          className="absolute group cursor-pointer touch-manipulation"
          style={{
            top: "46.2%",
            left: "88.6%",
            width: "10%",
            height: "5%",
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "4px",
            minWidth: "44px",
            minHeight: "44px",
          }}
          title="查看作品集"
        >
          <span className="block w-full h-full rounded transition-colors group-hover:bg-red-500/20" />
        </button>

        <button
          onClick={() => setIsMCNOpen(true)}
          className="absolute group cursor-pointer touch-manipulation"
          style={{
            top: "76.5%",
            left: "89.2%",
            width: "10%",
            height: "5%",
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "4px",
            minWidth: "44px",
            minHeight: "44px",
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
