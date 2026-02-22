import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Layout from './layout/Layout'
import Home from './pages/Home'
import ServiceDetail from './pages/ServiceDetail'
import NotFound from './pages/NotFound'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Router>
      <Layout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
