import "./App.css"
import { ModeSelector } from "@/components/ModeSelector"
import { TimerDisplay } from "@/components/TimerDisplay"
import { Controls } from "@/components/Controls"
import { ProgressTracker } from "@/components/ProgressTracker"

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0E] text-[#FAFAF9] flex flex-col font-sans">
      <header className="pt-10 px-6 flex items-center justify-center">
        <h1 className="text-[28px] font-sans font-semibold tracking-[-0.8px] text-[#FAFAF9]">Focus Timer</h1>
      </header>

      <main className="flex-1 w-full flex flex-col pt-3 pb-8">
        {/* Basic structure for the components to drop in */}
        <section className="modes-wrapper w-full">
          <ModeSelector />
        </section>

        <section className="timer-wrapper w-full">
          <TimerDisplay />
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
