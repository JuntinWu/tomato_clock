import { useState } from 'react';

interface ControlsProps {
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  isRunning: boolean;
}

export function Controls({ onStart, onPause, onReset, isRunning }: ControlsProps) {
  const [isAuto, setIsAuto] = useState(true);

  return (
    <div className="bg-[#16161A] rounded-2xl p-[14px] w-[354px] flex flex-col gap-2.5 mx-auto mt-4">
      <div className="flex gap-2 h-11 w-full flex-row">
        <button 
          onClick={onStart}
          disabled={isRunning}
          className={`flex-[3] flex items-center justify-center rounded-xl transition-colors ${
            isRunning ? 'bg-[#1A1A1E] text-[#6B6B70] cursor-not-allowed' : 'bg-[#E85A4F] text-white'
          }`}
        >
          <span className="font-sans text-[13px] font-semibold">開始</span>
        </button>
        <button 
          onClick={onPause}
          disabled={!isRunning}
          className={`flex-[2] flex items-center justify-center rounded-xl transition-colors ${
            !isRunning ? 'bg-[#1A1A1E] text-[#6B6B70] cursor-not-allowed' : 'bg-[#1A1A1E] text-white hover:bg-[#2A2A2E]'
          }`}
        >
          <span className="font-sans text-[13px] font-medium">暫停</span>
        </button>
        <button 
          onClick={onReset}
          className="flex-[2] flex items-center justify-center rounded-xl bg-[#1A1A1E] text-[#FAFAF9] hover:bg-[#2A2A2E] transition-colors"
        >
          <span className="font-sans text-[13px] font-medium">重置</span>
        </button>
      </div>
      <div className="flex justify-between items-center h-[38px] w-full">
        <span className="text-[#6B6B70] font-sans text-[13px] font-medium">
          切換方式：{isAuto ? '自動' : '手動'}
        </span>
        <div className="flex gap-1.5 h-[34px] w-[154px] bg-[#0B0B0E] p-1 rounded-xl">
           <button
             onClick={() => setIsAuto(true)}
             className={`flex-1 flex items-center justify-center rounded-[10px] transition-colors ${
               isAuto ? 'bg-[#E85A4F] text-white' : 'bg-transparent text-[#6B6B70]'
             }`}
           >
             <span className="font-sans text-[12px] font-medium">自動</span>
           </button>
           <button
             onClick={() => setIsAuto(false)}
             className={`flex-1 flex items-center justify-center rounded-[10px] transition-colors ${
               !isAuto ? 'bg-[#1A1A1E] text-[#FAFAF9]' : 'bg-transparent text-[#6B6B70]'
             }`}
           >
             <span className="font-sans text-[12px] font-medium">手動</span>
           </button>
        </div>
      </div>
    </div>
  );
}
