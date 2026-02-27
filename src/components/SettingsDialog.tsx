import { useState, useEffect } from "react";
import type { Durations } from "@/types";

interface SettingsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  currentDurations: Durations;
  onSave: (newDurations: Durations) => void;
}

interface SliderFieldProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}

function SliderField({ label, value, min, max, onChange }: SliderFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-[#FAFAF9] text-[14px] font-medium font-sans">{label}</span>
        <span className="text-[#E85A4F] text-[14px] font-semibold font-sans tabular-nums w-14 text-right">
          {value} 分鐘
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #E85A4F ${((value - min) / (max - min)) * 100}%, #2A2A2E ${((value - min) / (max - min)) * 100}%)`,
          accentColor: "#E85A4F",
        }}
      />
      <div className="flex justify-between text-[11px] text-[#8E8E93]">
        <span>{min}m</span>
        <span>{max}m</span>
      </div>
    </div>
  );
}

export function SettingsDialog({
  isOpen,
  onClose,
  currentDurations,
  onSave,
}: SettingsDialogProps) {
  const [local, setLocal] = useState<Durations>(currentDurations);

  // Sync local state whenever the dialog opens
  useEffect(() => {
    if (isOpen) {
      setLocal(currentDurations);
    }
  }, [isOpen, currentDurations]);

  if (!isOpen) return null;

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-6"
      onClick={onClose}
    >
      {/* Panel — stop propagation so clicking inside doesn't close */}
      <div
        className="w-full max-w-[354px] bg-[#16161A] rounded-2xl p-6 flex flex-col gap-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        <div className="flex items-center justify-between">
          <h2 className="text-[#FAFAF9] text-[18px] font-semibold font-sans">計時設定</h2>
          <button
            onClick={onClose}
            className="text-[#8E8E93] hover:text-[#FAFAF9] transition-colors text-xl leading-none"
            aria-label="關閉"
          >
            ✕
          </button>
        </div>

        {/* Sliders */}
        <div className="flex flex-col gap-5">
          <SliderField
            label="🍅 專注時段 (Focus)"
            value={Math.round(local.focus / 60)}
            min={1}
            max={60}
            onChange={(v) => setLocal((d) => ({ ...d, focus: v * 60 }))}
          />
          <SliderField
            label="☕ 短休息 (Short Break)"
            value={Math.round(local.shortBreak / 60)}
            min={1}
            max={30}
            onChange={(v) => setLocal((d) => ({ ...d, shortBreak: v * 60 }))}
          />
          <SliderField
            label="🌙 長休息 (Long Break)"
            value={Math.round(local.longBreak / 60)}
            min={1}
            max={60}
            onChange={(v) => setLocal((d) => ({ ...d, longBreak: v * 60 }))}
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl text-[14px] font-medium text-[#8E8E93] bg-[#2A2A2E] hover:bg-[#3A3A3E] transition-colors"
          >
            取消
          </button>
          <button
            onClick={() => onSave(local)}
            className="flex-1 py-2.5 rounded-xl text-[14px] font-semibold text-white bg-[#E85A4F] hover:bg-[#d44f45] transition-colors"
          >
            儲存
          </button>
        </div>
      </div>
    </div>
  );
}
