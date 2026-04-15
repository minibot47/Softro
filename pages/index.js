import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import Stats from '../components/Stats'
import Team from '../components/Team'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Softro — Creative Design Agency</title>
        <meta name="description" content="We design experiences that transform ideas into lasting impact." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <main className='px-3'>
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Stats />
        <Team />
        <Blog />
        <Footer />
      </main>



    </>
  )
}
