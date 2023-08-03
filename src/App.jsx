import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'
import Cards from './components/Cards'
import Footer from './components/Footer'

const App = () => {
  let boxRef = useRef(null)

  useEffect(() => {

    let tl = gsap.timeline()
    tl.to(boxRef.current, {
      y: '50vh',
      scale: 0.8,
      duration: 0,
    })

    tl.to(boxRef.current, {
      y: '0vh',
      duration: 2,
    })

    tl.to(boxRef.current, {
      delay: 0.3,
      rotate: 360,
      duration: 2,
    })

    tl.to(boxRef.current, {
      scale: 1,
      duration: 1.4
    })

  }, [])


  return (

    <div
      ref={boxRef}>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>

  )
}

export default App