import { ProfileSection } from "@/entities/ProfileSection"
import { Sidebar } from "@/entities/Sidebar"
import { ReactNode } from "react"

export default function  DashboardLayout ({children}: {children: ReactNode}) {
  return (
    <div 
      className="grid gap-6 h-screen"
      style={
        { gridTemplateColumns: '1fr 6fr' }
      }
    >
      <Sidebar/>
      <main className="p-8">
        {children}
      </main>
    </div>
  )
}