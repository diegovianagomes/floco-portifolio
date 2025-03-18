import type React from "react"
import Navigation from "@/components/navigation"

interface PageLayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col md:flex-row bg-white">
      <div className="w-full md:w-[240px] p-6 md:p-8 md:fixed md:h-screen overflow-auto bg-white">
        <Navigation />
      </div>
      <div className="flex-1 md:ml-[240px] p-6 md:p-8 bg-white">{children}</div>
    </main>
  )
}

