"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface SidebarProps {
  className?: string
  items?: {
    title: string
    icon?: React.ReactNode
    description?: string
    isExpanded?: boolean
    children?: {
      title: string
      icon?: React.ReactNode
      description?: string
    }[]
  }[]
}

export function Sidebar({ className, items = [] }: SidebarProps) {
  const [expanded, setExpanded] = useState<string[]>([])

  const toggleExpand = (title: string) => {
    setExpanded(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    )
  }

  return (
    <div className={cn("pb-12 w-72", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Components
            </h2>
            <div className="relative">
              <Input
                placeholder="Search components..."
                className="h-9 w-full rounded-md border border-input bg-background px-4 py-2 text-sm"
              />
              <div className="absolute right-2 top-2.5 text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.3-4.3"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-10rem)] px-1">
          <div className="space-y-1 p-2">
            {items.map((item, i) => (
              <div key={`${item.title}-${i}`} className="space-y-2">
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start hover:bg-accent/50",
                    expanded.includes(item.title) && "bg-accent/50"
                  )}
                  onClick={() => toggleExpand(item.title)}
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={cn(
                      "ml-auto h-4 w-4 transition-transform",
                      expanded.includes(item.title) && "rotate-180"
                    )}
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </Button>
                {expanded.includes(item.title) && item.children && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child, j) => (
                      <Button
                        key={`${child.title}-${j}`}
                        variant="ghost"
                        className="w-full justify-start text-sm hover:bg-accent/50"
                      >
                        {child.icon}
                        <span className="ml-2">{child.title}</span>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
