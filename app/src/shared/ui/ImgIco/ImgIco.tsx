import { FC, createElement } from 'react'
import type { LucideIcon } from "lucide-react";

// enum IcoName {
//   Home = "Home",
//   Timer = "Timer",
//   Sprout = "Sprout",
//   Settings = "Settings",
//   KanbanSquare = "KanbanSquare",
//   CalendarDays = "CalendarDays",
//   LayoutDashboard = "LayoutDashboard",
//   CircleDashed = "CircleDashed",
// }

interface ImgIcoProps {
  className?: string,
  ico: LucideIcon,
  width: number,
  height: number,
}

const ImgIco: FC<ImgIcoProps> = (props) => {
  const { className, ico, width, height } = props;

  return (
    createElement(
      ico,
      { className, width, height }
    )
  )
}

export { ImgIco }