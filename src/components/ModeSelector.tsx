export type Mode = 'focus' | 'shortBreak' | 'longBreak';

interface ModeSelectorProps {
  activeMode: Mode;
  onChange: (mode: Mode) => void;
}

export function ModeSelector({ activeMode, onChange }: ModeSelectorProps) {
  return (
    <div className="bg-[#16161A] rounded-2xl p-3.5 w-[354px] flex flex-col gap-2.5 mx-auto">
      <div className="flex gap-2 h-12 w-full">
        <button
          onClick={() => onChange('focus')}
          className={`flex-1 flex items-center justify-center rounded-xl transition-colors ${
            activeMode === 'focus' ? 'bg-[#E85A4F] text-white' : 'bg-[#1A1A1E] text-[#FAFAF9]'
          }`}
        >
          <span className="font-sans text-[13px] font-semibold">專注 25m</span>
        </button>
        <button
          onClick={() => onChange('shortBreak')}
          className={`flex-1 flex items-center justify-center rounded-xl transition-colors ${
            activeMode === 'shortBreak' ? 'bg-[#E85A4F] text-white' : 'bg-[#1A1A1E] text-[#FAFAF9]'
          }`}
        >
          <span className="font-sans text-[13px] font-medium">短休 5m</span>
        </button>
        <button
          onClick={() => onChange('longBreak')}
          className={`flex-1 flex items-center justify-center rounded-xl transition-colors ${
            activeMode === 'longBreak' ? 'bg-[#E85A4F] text-white' : 'bg-[#1A1A1E] text-[#FAFAF9]'
          }`}
        >
          <span className="font-sans text-[13px] font-medium">長休 15m</span>
        </button>
      </div>
    </div>
  );
}
