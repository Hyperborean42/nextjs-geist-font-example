"use client"

import { useCallback, useState } from "react"
import { Button } from "@/components/ui/button"

interface Node {
  id: string
  type: string
  position: { x: number; y: number }
  data: {
    title: string
    description?: string
    icon?: React.ReactNode
  }
}

interface Connection {
  id: string
  source: string
  target: string
}

export function Canvas() {
  const [nodes, setNodes] = useState<Node[]>([])
  const [connections, setConnections] = useState<Connection[]>([])

  const addNode = useCallback((type: string, data: any) => {
    const newNode: Node = {
      id: `node-${Date.now()}`,
      type,
      position: { x: 100, y: 100 },
      data
    }
    setNodes(prev => [...prev, newNode])
  }, [])

  return (
    <div className="relative h-[calc(100vh-3.5rem)] w-full overflow-hidden bg-[#0A0A0A] bg-[radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        <Button 
          variant="secondary"
          className="bg-orange-400/10 text-orange-400 hover:bg-orange-400/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M5 12h14"/>
            <path d="M12 5v14"/>
          </svg>
          New Workflow
        </Button>
        <Button variant="outline" size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 9 7 7 7-7"/>
          </svg>
        </Button>
      </div>
      <div className="absolute bottom-4 right-4 z-10 flex space-x-2">
        <Button variant="outline" className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          Run
        </Button>
        <Button variant="outline" className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          Test
        </Button>
        <Button variant="outline" className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          Save
        </Button>
        <Button variant="outline" className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          Fork
        </Button>
        <Button variant="outline" className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          API
        </Button>
      </div>
      <div className="absolute left-4 top-4 z-10">
        <Button variant="outline" size="icon" className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </Button>
      </div>
      <div className="h-full w-full" id="workflow-canvas">
        {nodes.map(node => (
          <div
            key={node.id}
            className="absolute rounded-lg bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            style={{
              left: node.position.x,
              top: node.position.y,
            }}
          >
            <div className="flex items-center space-x-2">
              {node.data.icon}
              <span className="font-medium">{node.data.title}</span>
            </div>
            {node.data.description && (
              <p className="mt-1 text-sm text-muted-foreground">
                {node.data.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
