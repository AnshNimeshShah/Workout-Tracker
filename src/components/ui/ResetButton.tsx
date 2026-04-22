import React from "react";

interface ResetButtonProps {
  onReset: () => void;
  disabled?: boolean;
}

export const ResetButton: React.FC<ResetButtonProps> = ({ onReset, disabled }) => {
  return (
    <div className="flex justify-end mt-auto pt-8">
      <button
        onClick={onReset}
        disabled={disabled}
        className="px-8 py-3 bg-zinc-100 text-black font-bold text-xs uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all duration-300 disabled:opacity-50"
      >
        Reset Active Session
      </button>
    </div>
  );
};

