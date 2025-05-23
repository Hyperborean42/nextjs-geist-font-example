"use client"

import { cn } from "@/lib/utils"

interface WorkflowNodeProps {
  title: string
  description?: string
  icon?: React.ReactNode
  type?: "input" | "output" | "process"
  isSelected?: boolean
  onClick?: () => void
  className?: string
}

export function WorkflowNode({
  title,
  description,
  icon,
  type = "process",
  isSelected = false,
  onClick,
  className,
}: WorkflowNodeProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative w-[280px] cursor-pointer rounded-lg border border-border/50 bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        isSelected && "ring-2 ring-orange-400",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {icon && (
            <div className={cn(
              "flex h-8 w-8 items-center justify-center rounded-md",
              type === "input" && "bg-blue-500/10 text-blue-500",
              type === "output" && "bg-orange-500/10 text-orange-500",
              type === "process" && "bg-purple-500/10 text-purple-500"
            )}>
              {icon}
            </div>
          )}
          <div>
            <h3 className="font-medium">{title}</h3>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-green-500" />
        </div>
      </div>
      
      {/* Connection Points */}
      <div className="absolute -left-1 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-border/50 bg-background group-hover:border-orange-400" />
      <div className="absolute -right-1 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-border/50 bg-background group-hover:border-orange-400" />
      
      {/* Hover Controls */}
      <div className="absolute -top-8 right-0 hidden space-x-1 group-hover:flex">
        <button className="rounded-md bg-background/95 p-1 text-muted-foreground hover:text-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
            <polyline points="16 6 12 2 8 6"/>
            <line x1="12" y1="2" x2="12" y2="15"/>
          </svg>
        </button>
        <button className="rounded-md bg-background/95 p-1 text-muted-foreground hover:text-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9"/>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
          </svg>
        </button>
        <button className="rounded-md bg-background/95 p-1 text-muted-foreground hover:text-red-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18"/>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
