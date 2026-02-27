import { useState } from 'react';

type Mode = 'focus' | 'shortBreak' | 'longBreak';

export function ModeSelector() {
  const [activeMode, setActiveMode] = useState<Mode>('focus');

  return (
    <div className="bg-[#16161A] rounded-2xl p-3.5 w-[354px] flex flex-col gap-2.5 mx-auto">
      <div className="flex gap-2 h-12 w-full">
        <button
          onClick={() => setActiveMode('focus')}
          className={`flex-1 flex items-center justify-center rounded-xl transition-colors ${
            activeMode === 'focus' ? 'bg-[#E85A4F] text-white' : 'bg-[#1A1A1E] text-[#FAFAF9]'
          }`}
        >
          <span className="font-sans text-[13px] font-semibold">專注 25m</span>
        </button>
        <button
          onClick={() => setActiveMode('shortBreak')}
          className={`flex-1 flex items-center justify-center rounded-xl transition-colors ${
            activeMode === 'shortBreak' ? 'bg-[#E85A4F] text-white' : 'bg-[#1A1A1E] text-[#FAFAF9]'
          }`}
        >
          <span className="font-sans text-[13px] font-medium">短休 5m</span>
        </button>
        <button
          onClick={() => setActiveMode('longBreak')}
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
