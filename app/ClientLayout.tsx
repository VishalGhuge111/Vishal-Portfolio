"use client"
import type React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ViruPopup from "@/components/ViruPopup"
import { ThemeProvider } from "@/components/ThemeProvider"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isViruPage = pathname === "/viru"

  return (
    <ThemeProvider>
      <ScrollToTop />
      <div
        className={`${isViruPage ? "h-screen" : "min-h-screen"} bg-white dark:bg-gray-900 transition-colors flex flex-col`}
      >
        <Navbar />
        <main className={isViruPage ? "flex-1 flex flex-col" : "flex-1"}>{children}</main>
        {!isViruPage && <Footer />}
        {!isViruPage && <ViruPopup />}
      </div>
    </ThemeProvider>
  )
}
