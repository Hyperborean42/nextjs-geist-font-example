"use client"

import { TopNav } from "./TopNav"
import { Sidebar } from "./Sidebar"
import { ReactNode } from "react"

const sidebarItems = [
  {
    title: "Components",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M3 3h7v7H3z"/>
        <path d="M14 3h7v7h-7z"/>
        <path d="M14 14h7v7h-7z"/>
        <path d="M3 14h7v7H3z"/>
      </svg>
    ),
    children: [
      { title: "Components" },
      { title: "Embedded Workflows" },
      { title: "Integrations" }
    ]
  },
  {
    title: "Input",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="m12 19-7-7 7-7"/>
        <path d="M19 12H5"/>
      </svg>
    ),
    description: "Add text, images, and files to your workflow"
  },
  {
    title: "Output",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="m5 12h14"/>
        <path d="m12 5 7 7-7 7"/>
      </svg>
    ),
    description: "Display and format workflow results"
  },
  {
    title: "Trigger",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4"/>
        <path d="M12 8h.01"/>
      </svg>
    ),
    description: "Trigger your workflow based on events"
  },
  {
    title: "AI",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M12 2a5 5 0 0 1 5 5v6a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5Z"/>
        <path d="M19 10v6a7 7 0 0 1-14 0v-6"/>
        <line x1="12" y1="19" x2="12" y2="22"/>
      </svg>
    ),
    description: "Text generation, image creation, and AI agents"
  },
  {
    title: "Web",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    description: "Web crawling, API calls, and internet operations"
  }
]

interface LayoutProps {
  children: ReactNode
  showSidebar?: boolean
}

export function Layout({ children, showSidebar = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] bg-[radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:16px_16px]">
      <TopNav />
      <div className="flex pt-14">
        {showSidebar && (
          <aside className="fixed left-0 top-14 z-30 h-[calc(100vh-3.5rem)] w-72 border-r border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Sidebar items={sidebarItems} />
          </aside>
        )}
        <main className={`flex-1 ${showSidebar ? "pl-72" : ""}`}>
          {children}
        </main>
      </div>
    </div>
  )
}
