import '../styles/globals.css'
import localFont from 'next/font/local'
import { ThemeProvider } from '../components/themecontext'

export const funnel = localFont({
  src: [
    { path: '../public/fonts/FunnelDisplay-Light.woff', weight: '300' },
    { path: '../public/fonts/FunnelDisplay-Light.woff2', weight: '400' },
    { path: '../public/fonts/FunnelDisplay-Light.woff2', weight: '700' },
  ],
  variable: '--font-funnel',
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <main className={funnel.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}