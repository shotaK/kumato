import { string } from "prop-types";
import { ReactNode } from "react";

const cleanPercentage = (percentage: number) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct = 100 }: { colour: string; pct?: number }) => {
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      className="transition-all"
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""}
      strokeWidth={"1rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const Text = ({ title }: { title: ReactNode }) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"2rem"}
      fill={"#fff"}
    >
      {title}
    </text>
  );
};

const Pie = ({
  title,
  percentage,
  className = "",
}: {
  title: ReactNode;
  percentage: number;
  className?: string;
}) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={200} height={200} className={className}>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle colour="rgb(229, 231, 235)" />
        <Circle colour="url(#gradient)" pct={pct} />
      </g>
      <Text title={title} />
    </svg>
  );
};

Pie.propTypes = {
  className: string,
};

export default Pie;
