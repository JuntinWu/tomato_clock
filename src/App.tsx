import { useState, useEffect } from "react"
import "./App.css"
import { ModeSelector, type Mode } from "@/components/ModeSelector"
import { TimerDisplay } from "@/components/TimerDisplay"
import { Controls } from "@/components/Controls"
import { ProgressTracker } from "@/components/ProgressTracker"
import { SettingsDialog } from "@/components/SettingsDialog"
import type { Durations } from "@/types"

const DEFAULT_DURATIONS: Durations = {
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
  const [activeMode, setActiveModeState] = useState<Mode>('focus');
  const [durations, setDurations] = useState<Durations>(DEFAULT_DURATIONS);
  const [timeRemaining, setTimeRemaining] = useState(DEFAULT_DURATIONS.focus);
  const [isRunning, setIsRunning] = useState(false);
  const [completedCycles, setCompletedCycles] = useState(0);
  const [showSettings, setShowSettings] = useState(false);

  // Custom handler to switch modes
  const setActiveMode = (mode: Mode) => {
    setActiveModeState(mode);
    setTimeRemaining(durations[mode]);
    setIsRunning(false);
  };

  const handleSaveSettings = (newDurations: Durations) => {
    setDurations(newDurations);
    setTimeRemaining(newDurations[activeMode]);
    setIsRunning(false);
    setShowSettings(false);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && isRunning) {
      if (activeMode === 'focus') {
        setCompletedCycles((c) => c + 1);
      }
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeRemaining, activeMode]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTimeRemaining(durations[activeMode]);
  };
  
  // Derived state for the timer display
  const timeFormatted = formatTime(timeRemaining);
  const statusText = `目前階段：${MODE_LABELS[activeMode]}`;
  const progress = timeRemaining / durations[activeMode];

  return (
    <div className="min-h-screen bg-[#0B0B0E] text-[#FAFAF9] flex flex-col font-sans">
      <header className="pt-10 px-6 flex items-center justify-between relative">
        <div className="w-10" />
        <h1 className="text-[28px] font-sans font-semibold tracking-[-0.8px] text-[#FAFAF9]">Focus Timer</h1>
        <button
          onClick={() => setShowSettings(true)}
          className="w-10 h-10 flex items-center justify-center rounded-full text-[#8E8E93] hover:text-[#FAFAF9] hover:bg-[#2A2A2E] transition-all text-xl"
          aria-label="開啟設定"
        >
          ⚙️
        </button>
      </header>

      <SettingsDialog
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        currentDurations={durations}
        onSave={handleSaveSettings}
      />

      <main className="flex-1 w-full flex flex-col pt-3 pb-8">
        {/* Basic structure for the components to drop in */}
        <section className="modes-wrapper w-full">
          <ModeSelector activeMode={activeMode} onChange={setActiveMode} durations={durations} />
        </section>

        <section className="timer-wrapper w-full">
          <TimerDisplay timeFormatted={timeFormatted} statusText={statusText} progress={progress} />
        </section>

        <section className="controls-wrapper w-full">
          <Controls 
            onStart={handleStart} 
            onPause={handlePause} 
            onReset={handleReset} 
            isRunning={isRunning} 
          />
        </section>

        <section className="tracker-wrapper w-full mt-4">
          <ProgressTracker completedCycles={completedCycles} />
        </section>
      </main>
    </div>
  )
}

export default App
