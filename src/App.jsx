import { useState, lazy, Suspense } from "react";

const PortfolioModal = lazy(() => import("./components/PortfolioModal"));
const MCNModal = lazy(() => import("./components/MCNModal"));

function ModalSkeleton({ bgColor }) {
  return (
    <div className={`fixed inset-0 z-50 flex items-start justify-center pt-[5vh] touch-none`}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] shadow-2xl ${bgColor}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`w-full max-h-[90vh] overflow-y-auto p-8 ${bgColor === "bg-black" ? "flex flex-col items-center justify-center" : ""}`}>
          <div className="flex flex-col items-center">
            <div className={`w-12 h-12 border-4 border-t-transparent rounded-full animate-spin ${bgColor === "bg-black" ? "border-white/30" : "border-gray-300"}`} />
            <p className={`mt-4 text-sm ${bgColor === "bg-black" ? "text-gray-400" : "text-gray-500"}`}>加载中...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isMCNOpen, setIsMCNOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center overflow-x-hidden py-4">
      <div className="relative max-w-[1200px] w-full mx-2 md:mx-0">
        <img
          src="/resume.jpg"
          alt="刘天龙个人简历"
          className="w-full h-auto block rounded-sm shadow-md"
          loading="lazy"
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

      <Suspense fallback={<ModalSkeleton bgColor="bg-black" />}>
        <PortfolioModal
          isOpen={isPortfolioOpen}
          onClose={() => setIsPortfolioOpen(false)}
        />
      </Suspense>
      <Suspense fallback={<ModalSkeleton bgColor="bg-white" />}>
        <MCNModal
          isOpen={isMCNOpen}
          onClose={() => setIsMCNOpen(false)}
        />
      </Suspense>
    </div>
  );
}
