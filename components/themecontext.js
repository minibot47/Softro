import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

function shouldBeDark() {
  const hour = new Date().getHours()
  return hour >= 18 || hour < 6
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

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const interval = setInterval(() => {
      const forceDark = shouldBeDark()

      if (forceDark) {
        setDark(true)
        setManualOverride(false)
        localStorage.removeItem('theme-manual')
      } else if (!manualOverride) {
        setDark(prefersDark) // ✅ was hardcoded to false before
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