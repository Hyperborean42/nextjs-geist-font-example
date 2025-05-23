"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function TopNav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Logo" width={32} height={32} />
            <span className="text-xl font-semibold text-orange-400">Arkai</span>
            <span className="text-xs text-muted-foreground">early access</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-orange-400">
              Dashboard
            </Link>
            <Link href="/marketplace" className="text-sm font-medium text-muted-foreground transition-colors hover:text-orange-400">
              Marketplace
            </Link>
            <Link href="/workflow" className="text-sm font-medium text-muted-foreground transition-colors hover:text-orange-400">
              Workflow editor
            </Link>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-orange-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <path d="M12 17h.01"/>
            </svg>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">M</span>
            </span>
          </Button>
        </div>
      </div>
    </nav>
  )
}
