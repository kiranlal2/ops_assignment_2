import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'
import Header from './layouts/Header'
import Footer from './layouts/Footer'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  
  return (
    <>
        <div className="app">
          <Header />
          <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          </Suspense>
          <Footer />
        </div>
    </>
  )
}

export default App
