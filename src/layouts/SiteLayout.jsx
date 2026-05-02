import { AnimatePresence } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SocialFloats from '../components/SocialFloats'
import useScrollToTop from '../hooks/useScrollToTop'
import PageTransition from '../components/PageTransition'

export default function SiteLayout() {
  const location = useLocation()
  useScrollToTop()

  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      <SocialFloats />
    </div>
  )
}
