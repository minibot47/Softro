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
      setDark(savedTheme === 'dark')
    } else {
      setDark(shouldBeDark() || prefersDark)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  // Check every minute — time-based rules ALWAYS win at 6pm/6am
  // regardless of manual preference
  useEffect(() => {
    const interval = setInterval(() => {
      const forceDark = shouldBeDark()

      // If we've crossed into 6pm or 6am, override everything
      // and clear the manual flag so daytime is user-controlled again
      if (forceDark) {
        setDark(true)
        setManualOverride(false)
        localStorage.removeItem('theme-manual')
      } else if (!manualOverride) {
        // Outside forced hours, only auto-switch if no manual choice
        setDark(false)
      }
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