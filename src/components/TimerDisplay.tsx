export function TimerDisplay() {
  return (
    <div className="bg-[#16161A] rounded-2xl pt-8 pb-6 px-6 w-[354px] flex flex-col items-center justify-center gap-3 mx-auto mt-4">
      <div className="relative w-[210px] h-[210px] flex items-center justify-center">
        {/* SVG Ring Background */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 210 210">
          <circle
            cx="105"
            cy="105"
            r="99"
            fill="#E85A4F20"
            stroke="#E85A4F"
            strokeWidth="12"
            strokeDasharray="622"
            strokeDashoffset="0"
            className="transition-all duration-1000 ease-linear"
          />
        </svg>
        <span className="font-sans text-[48px] font-bold text-[#FAFAF9] tracking-[-1.2px] z-10">
          25:00
        </span>
      </div>
      <p className="font-sans text-[14px] font-medium text-[#E85A4F] mt-2">
        目前階段：專注中
      </p>
    </div>
  );
}
