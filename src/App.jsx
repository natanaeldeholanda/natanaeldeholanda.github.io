import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import ManagementBiProject from './projects/ManagementBiProject'
import ExecutiveDashboardProject from './projects/ExecutiveDashboardProject'
import RestApiProject from './projects/RestApiProject'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/management-bi" element={<ManagementBiProject />} />
        <Route path="/projects/executive-dashboard" element={<ExecutiveDashboardProject />} />
        <Route path="/projects/rest-api" element={<RestApiProject />} />
      </Routes>
      <Footer />
    </>
  )
}
