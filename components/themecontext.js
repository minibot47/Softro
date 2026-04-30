import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

function shouldBeDark() {
  const hour = new Date().getHours()
  return hour >= 18 || hour < 6 // dark from 6pm to 6am
}

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false)
  const [manualOverride, setManualOverride] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const savedManual = localStorage.getItem('theme-manual') === 'true'
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    setManualOverride(savedManual)

    if (savedManual && savedTheme) {
      // User has manually chosen before — respect it
      setDark(savedTheme === 'dark')
    } else {
      // No manual choice — use time, fall back to system preference
      setDark(shouldBeDark() || prefersDark)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  // Check every minute if we've crossed 6pm or 6am
  useEffect(() => {
    const interval = setInterval(() => {
      if (manualOverride) return // user chose manually — leave it alone
      setDark(shouldBeDark())
    }, 60 * 1000)

    return () => clearInterval(interval)
  }, [manualOverride])

  const toggleTheme = () => {
    setManualOverride(true)
    localStorage.setItem('theme-manual', 'true')
    setDark(prev => !prev)
  }

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)