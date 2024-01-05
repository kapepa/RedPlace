import { ProfileSection } from "@/entities/ProfileSection"
import { Sidebar } from "@/entities/Sidebar"
import { ReactNode } from "react"

export default function BaseLayout ({children}: {children: ReactNode}) {
  
  return (
    <div 
      className="grid h-screen"
      style={
        { gridTemplateColumns: '1fr 6fr' }
      }
    >
      <Sidebar className="bg-sidebar"/>
      <main>
        {children}
      </main>
    </div>
  )
}