import { useEffect, useState } from 'react'
import Header from './components/Header'
import StatusBar from './components/StatusBar'
import Overview from './components/Overview'
import Requirements from './components/Requirements'
import Timeline from './components/Timeline'
import DecisionLog from './components/DecisionLog'
import MetaNote from './components/MetaNote'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="min-h-screen bg-midnight">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        <StatusBar />
        <Overview />
        <Requirements />
        <Timeline />
        <DecisionLog />
        <MetaNote />
      </main>
    </div>
  )
}

export default App
