type Props = {
  position: "top" | "bottom";
  fill: string;
};

export default function DiagonalDivider({ position, fill }: Props) {
  return (
    <div
      className={`absolute inset-x-0 ${position}-0 overflow-hidden leading-[0] pointer-events-none`}
      aria-hidden="true"
    >
      {position === "bottom" ? (
        <svg
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          className="w-full h-16 block"
        >
          <polygon points="0,64 1440,0 1440,64" fill={fill} />
        </svg>
      ) : (
        <svg
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          className="w-full h-16 block"
        >
          <polygon points="0,0 1440,0 0,64" fill={fill} />
        </svg>
      )}
    </div>
  );
}
