export function ProgressTracker() {
  return (
    <div className="bg-[#16161A] rounded-2xl p-[14px] w-[354px] flex flex-col gap-2.5 mx-auto mt-4">
      <p className="text-[#8E8E93] font-sans text-[13px] font-medium">
        已完成 1/4 個專注時段，下一次長休息在第 4 回合
      </p>
      <div className="flex gap-2 h-4 w-full">
        <div className="w-4 h-4 rounded-full bg-[#E85A4F]" />
        <div className="w-4 h-4 rounded-full bg-[#E85A4F]" />
        <div className="w-4 h-4 rounded-full bg-[#2A2A2E]" />
        <div className="w-4 h-4 rounded-full bg-[#2A2A2E]" />
      </div>
    </div>
  );
}
