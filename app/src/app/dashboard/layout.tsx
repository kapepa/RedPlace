import { ProfileSection } from "@/entities/ProfileSection"
import { Sidebar } from "@/entities/Sidebar"
import { ReactNode } from "react"

export default function  DashboardLayout ({children}: {children: ReactNode}) {
  return (
    <main className="DashboardLayout">
      <Sidebar/>
      <ProfileSection/>
      {children}
    </main>
  )
}