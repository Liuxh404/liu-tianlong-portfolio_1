/**
 * AvatarPlate — stands in for a real portrait photo.
 * Until a photo is supplied, this renders as an intentional
 * "monogram plate" (display-face initial on a bronze radial glow)
 * rather than a generic gray placeholder box.
 *
 * To use a real photo: replace the contents of the outer <div> with
 * <img src="/portrait.jpg" className="h-full w-full object-cover" alt="刘天龙" />
 */
export default function AvatarPlate() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden border border-line bg-ink-2">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 30% 20%, rgba(201,168,118,0.22), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-[180px] leading-none text-paper/90 select-none">
          刘
        </span>
      </div>
      <div className="absolute inset-0 border border-line-strong" />
      <span className="seal absolute bottom-4 left-4 text-[10px] text-mist-dim">
        PORTRAIT — 待替换为本人照片
      </span>
    </div>
  );
}
