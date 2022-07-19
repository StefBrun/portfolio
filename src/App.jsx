// import all the components
import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experinece from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
   //components are rendered here and are wrappred in a div or fragment tag
   
   <>
    <Header />
    <Nav />
    <About />
    <Experinece />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    </>
    
  )
}

export default App