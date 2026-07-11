import Modal from "./Modal";

export default function MCNModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="bg-white">
      <div className="bg-white">
        {/* MCN案例原图 - 完整展示 */}
        <img
          src="/mcn.jpg"
          alt="MCN直播案例"
          className="w-full h-auto block"
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
