import { useState } from "react";
import Modal from "./Modal";

export default function PortfolioModal({ isOpen, onClose }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="bg-black">
      <div className="bg-black">
        {!imageLoaded && (
          <div className="w-full h-64 md:h-96 flex items-center justify-center bg-gray-900">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-white/30 border-t-transparent rounded-full animate-spin" />
              <p className="mt-4 text-gray-400 text-sm">加载图片中...</p>
            </div>
          </div>
        )}
        <img
          src="/portfolio.jpg"
          alt="作品集"
          className={`w-full h-auto block transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0 absolute"}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div className="hidden flex-col items-center justify-center min-h-[400px] bg-gray-900 text-gray-500 p-8">
          <p className="text-lg mb-2">请将作品集原图命名为 portfolio.jpg</p>
          <p className="text-sm">放入 public/ 目录后刷新页面</p>
        </div>

        <div className="px-2 md:px-8 py-4 md:py-8">
          <video
            controls
            playsInline
            className="w-full h-auto rounded-lg shadow-lg"
            loading="lazy"
            style={{ maxWidth: "100%" }}
          >
            <source src="/portfolio-video.mp4" type="video/mp4" />
            <track kind="captions" />
          </video>
          <div className="mt-2 text-center text-gray-400 text-xs md:text-sm">
            视频加载失败？请确保 portfolio-video.mp4 文件已放入 public 目录
          </div>
        </div>
      </div>
    </Modal>
  );
}
