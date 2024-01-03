import { Dashboard } from "@/features/Dashboard"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'dashboard page',
}

export default function DashboardPage () {
  return (
    <Dashboard/>
  )
}