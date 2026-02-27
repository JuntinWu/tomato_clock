import { useState } from "react"
import "./App.css"
import { ModeSelector, type Mode } from "@/components/ModeSelector"
import { TimerDisplay } from "@/components/TimerDisplay"
import { Controls } from "@/components/Controls"
import { ProgressTracker } from "@/components/ProgressTracker"

const MODE_DURATIONS: Record<Mode, number> = {
  focus: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
};

const MODE_LABELS: Record<Mode, string> = {
  focus: "專注中",
  shortBreak: "短休中",
  longBreak: "長休中",
};

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function App() {
  const [activeMode, setActiveMode] = useState<Mode>('focus');
  
  // Derived state for the timer display
  const timeFormatted = formatTime(MODE_DURATIONS[activeMode]);
  const statusText = `目前階段：${MODE_LABELS[activeMode]}`;

  return (
    <div className="min-h-screen bg-[#0B0B0E] text-[#FAFAF9] flex flex-col font-sans">
      <header className="pt-10 px-6 flex items-center justify-center">
        <h1 className="text-[28px] font-sans font-semibold tracking-[-0.8px] text-[#FAFAF9]">Focus Timer</h1>
      </header>

      <main className="flex-1 w-full flex flex-col pt-3 pb-8">
        {/* Basic structure for the components to drop in */}
        <section className="modes-wrapper w-full">
          <ModeSelector activeMode={activeMode} onChange={setActiveMode} />
        </section>

        <section className="timer-wrapper w-full">
          <TimerDisplay timeFormatted={timeFormatted} statusText={statusText} />
        </section>

        <section className="controls-wrapper w-full">
          <Controls />
        </section>

        <section className="tracker-wrapper w-full mt-4">
          <ProgressTracker />
        </section>
      </main>
    </div>
  )
}

export default App
