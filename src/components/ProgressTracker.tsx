interface ProgressTrackerProps {
  completedCycles: number;
}

export function ProgressTracker({ completedCycles }: ProgressTrackerProps) {
  const cyclesThisRound = completedCycles % 4;
  const longBreakRound = Math.floor(completedCycles / 4) * 4 + 4;

  return (
    <div className="bg-[#16161A] rounded-2xl p-[14px] w-[354px] flex flex-col gap-2.5 mx-auto mt-4">
      <p className="text-[#8E8E93] font-sans text-[13px] font-medium">
        已完成 {cyclesThisRound}/4 個專注時段，下一次長休息在第 {longBreakRound} 回合
      </p>
      <div className="flex gap-2 h-4 w-full">
        {[0, 1, 2, 3].map((index) => (
          <div 
            key={index} 
            className={`w-4 h-4 rounded-full ${index < cyclesThisRound ? 'bg-[#E85A4F]' : 'bg-[#2A2A2E]'}`} 
          />
        ))}
      </div>
    </div>
  );
}
