/**
 * Seal — the page's signature mark.
 * A laser-etched "chop stamp" treatment of the surname 刘,
 * echoing the traditional Chinese seal (印章) while reading as
 * precise / technical thanks to the mono rule and hairline frame.
 * Reused in the nav, the hero corner, and the footer.
 */
export default function Seal({ size = 40 }) {
  return (
    <div
      className="relative flex items-center justify-center border border-line-strong text-bronze"
      style={{ width: size, height: size }}
    >
      <span
        className="font-display"
        style={{ fontSize: size * 0.52, lineHeight: 1 }}
      >
        刘
      </span>
      <span
        className="absolute -bottom-1 -right-1 h-1.5 w-1.5 bg-bronze"
        aria-hidden="true"
      />
    </div>
  );
}
