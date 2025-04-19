// components/ToggleSwitch.tsx
import React from "react";

interface ToggleSwitchProps {
  enabled: boolean;
  onToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ enabled, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className={`w-10 h-6 flex items-center bg-white border-2 border-blue-500 rounded-full p-1 cursor-pointer transition duration-300 ${
        enabled ? "justify-end" : "justify-start"
      }`}
    >
      <div className="w-4 h-4 bg-blue-500 rounded-full transition-all"></div>
    </div>
  );
};

export default ToggleSwitch;
