"use client"

import { Layout } from "@/components/layout/Layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <Layout>
      <div className="flex min-h-[calc(100vh-3.5rem)] flex-col gap-8 p-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Home</h1>
          
          {/* Recent Workflows Section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Recent Workflows</h2>
              <div className="flex items-center gap-4">
                <div className="relative w-64">
                  <Input
                    placeholder="Search recent workflows..."
                    className="pl-8"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                  >
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </div>
                <Button className="bg-orange-400 text-background hover:bg-orange-500">
                  New Workflow
                </Button>
              </div>
            </div>

            {/* Workflow Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col gap-4 p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                        <rect width="7" height="7" x="3" y="3" rx="1"/>
                        <rect width="7" height="7" x="14" y="3" rx="1"/>
                        <rect width="7" height="7" x="14" y="14" rx="1"/>
                        <rect width="7" height="7" x="3" y="14" rx="1"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Agente General</h3>
                      <p className="text-sm text-muted-foreground">v5</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="1"/>
                      <circle cx="19" cy="12" r="1"/>
                      <circle cx="5" cy="12" r="1"/>
                    </svg>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Agente de propósito general con capacidad para navegar por internet. Puede leer y procesar...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>By @arkai</span>
                    <span className="rounded-full bg-purple-500/10 px-2 py-0.5 text-xs text-purple-500">
                      Custom Assistants
                    </span>
                  </div>
                  <Button variant="ghost" size="sm">View details</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* User Stats Card */}
        <Card className="w-full p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">User Stats</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Current plan:</span>
              <span className="rounded-full bg-orange-500/10 px-2 py-0.5 text-xs font-medium text-orange-500">
                FREE
              </span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
                  <path d="M12 2v20"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
                <span className="font-medium">Credits</span>
              </div>
              <p className="mt-1 text-2xl font-bold">200,000</p>
              <p className="text-sm text-muted-foreground">total</p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  )
}
