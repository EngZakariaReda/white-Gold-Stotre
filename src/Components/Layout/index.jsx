import { Outlet } from 'react-router'
import Navbar from '../Static/Navbar'
import Footer from '../Static/Footer'
import Sidebar from '../Static/Sidebar/Sidebar'
import { useState } from 'react'
import ScrollToTop from '../Static/ScrollToTop/ScrollToTop'

export default function Layout() {
  const [isOpen , setIsOpen] = useState(false);
  return (
    <>
      <Navbar setIsOpen={setIsOpen} />
      <Outlet />
      <Footer />
      <Sidebar isOpen={isOpen}  setIsOpen={setIsOpen} />
      <ScrollToTop />
    </>
  )
}
