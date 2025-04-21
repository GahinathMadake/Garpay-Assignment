import { useEffect, useState } from "react";
import { IconType } from "react-icons";

type Metric = {
  title: string;
  value: number;
  change: string;
  note: string;
  color: string;
  icon: IconType;
};

interface MetricCardProps {
  m: Metric;
}

const MetricCard: React.FC<MetricCardProps> = ({ m }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const duration = 100; // ms
    const steps = 100;
    const increment = m.value / steps;
    const intervalTime = duration / steps;

    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= m.value) {
        clearInterval(interval);
        setCount(m.value);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [m.value]);

  return (
    <div className="flex items-center gap-2 min-w-[200px] rounded-2xl border px-3 py-4">
      <div className="w-12 h-12 rounded-full bg-sidebar flex items-center justify-center">
        <m.icon size={20} />
      </div>
      <div className="px-4 space-y-1">
        <div className="text-sm text-muted-foreground">{m.title}</div>
        <div className="text-xl font-semibold">{count}</div>
        <div className={`text-xs ${m.color}`}>
          {m.change} {m.note}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
