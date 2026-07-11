import { useState } from "react";
import Modal from "./Modal";

export default function MCNModal({ isOpen, onClose }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="bg-white">
      <div className="bg-white">
        {!imageLoaded && (
          <div className="w-full h-64 md:h-96 flex items-center justify-center bg-gray-100">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin" />
              <p className="mt-4 text-gray-500 text-sm">加载图片中...</p>
            </div>
          </div>
        )}
        <img
          src="/mcn.jpg"
          alt="MCN直播案例"
          className={`w-full h-auto block transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0 absolute"}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div className="hidden flex-col items-center justify-center min-h-[400px] bg-gray-100 text-gray-500 p-8">
          <p className="text-lg mb-2">请将MCN案例原图命名为 mcn.jpg</p>
          <p className="text-sm">放入 public/ 目录后刷新页面</p>
        </div>
      </div>
    </Modal>
  );
}
