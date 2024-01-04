import { Dashboard } from "@/features/Dashboard"
import { Heading } from "@/widgets/Heading"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'dashboard page',
}

export default function DashboardPage () {
  return (
    <div className="flex flex-col p-8 ">
      <Heading title="Dashboard"/>
      <Dashboard/>
    </div>
  )
}