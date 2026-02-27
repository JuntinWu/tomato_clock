import "./App.css"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <header className="px-6 py-4 flex items-center justify-center border-b border-border/50">
        <h1 className="text-2xl font-serif font-medium tracking-tight">Focus Timer</h1>
      </header>

      <main className="flex-1 p-6 max-w-sm mx-auto w-full flex flex-col gap-6">
        {/* Basic structure for the components to drop in */}
        <section className="modes-wrapper flex flex-col gap-4">
          <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase hidden">Modes</h2>
          <div className="bg-card rounded-2xl p-4 w-full">
             <p className="text-center font-serif text-muted-foreground">Mode Cards Here</p>
          </div>
        </section>

        <section className="timer-wrapper mt-4">
          <div className="bg-card rounded-2xl p-8 w-full min-h-64 flex items-center justify-center">
             <p className="text-center font-serif text-muted-foreground">Timer Circular Progress Here</p>
          </div>
        </section>

        <section className="controls-wrapper mt-4">
          <div className="bg-card rounded-2xl p-4 w-full min-h-32 flex items-center justify-center">
             <p className="text-center font-serif text-muted-foreground">Controls Here</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
