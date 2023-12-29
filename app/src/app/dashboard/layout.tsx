import { ProfileSection } from "@/entities/ProfileSection"
import { Sidebar } from "@/entities/Sidebar"
import { ReactNode } from "react"

export default function  DashboardLayout ({children}: {children: ReactNode}) {
  return (
    <div>
      <Sidebar/>
      <ProfileSection/>
      <main>
        {children}
      </main>
    </div>
  )
}