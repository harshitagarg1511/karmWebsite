import { ReactNode, useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { AnimatePresence } from 'framer-motion'

interface LayoutProps {
  children: ReactNode
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

export default function Layout({ children, menuOpen, setMenuOpen }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-dark min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="flex-1 w-full">
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
