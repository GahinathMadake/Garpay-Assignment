import React, { useEffect, useState } from "react";

const size =    100;
const strokeWidth = 8;
const radius = (size - strokeWidth) / 2;
const circumference = 2 * Math.PI * radius;

type QuickStat = {
  label: string;
  percent: number;
  strokeColor: string;
  color: string;
};

const quickStats: QuickStat[] = [
  { label: "Reach", percent: 75, strokeColor: "stroke-blue-500", color: "text-blue-500" },
  { label: "Engagement", percent: 55, strokeColor: "stroke-green-500", color: "text-green-500" },
  { label: "Conversions", percent: 32, strokeColor: "stroke-purple-500", color: "text-purple-500" },
  { label: "Bounce Rate", percent: 18, strokeColor: "stroke-red-500", color: "text-red-500" },
];

const QuickStatsSection: React.FC = () => {
  const [progressValues, setProgressValues] = useState<number[]>(quickStats.map(() => 0));

  useEffect(() => {
    const duration = 800; // 5 seconds
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const updatedValues = quickStats.map((stat) => {
        return Math.min(stat.percent, parseFloat((stat.percent * progress).toFixed(1)));
      });

      setProgressValues(updatedValues);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {quickStats.map((s, index) => {
        const animatedPercent = progressValues[index];
        const strokeDashoffset = circumference - (animatedPercent / 100) * circumference;

        return (
          <div key={s.label} className="shadow-none border rounded-sm p-4">
            <div className="px-4 flex flex-col items-center gap-4">
              <div className="text-muted-foreground text-center font-bold text-md">
                {s.label}
              </div>

              <div className="relative" style={{ width: size, height: size }}>
                <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
                  {/* Background circle */}
                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    className="stroke-gray-200"
                    strokeWidth={strokeWidth}
                  />
                  {/* Progress circle */}
                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    className={s.strokeColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-lg font-medium ${s.color}`}>
                    {Math.round(animatedPercent)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuickStatsSection;
