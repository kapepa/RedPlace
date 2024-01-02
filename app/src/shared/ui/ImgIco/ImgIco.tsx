import { FC, createElement } from 'react'
import * as lucide from "lucide-react";

enum IcoName {
  Home = "Home",
  Timer = "Timer",
  Sprout = "Sprout",
  Settings = "Settings",
  KanbanSquare = "KanbanSquare",
  CalendarDays = "CalendarDays",
  LayoutDashboard = "LayoutDashboard",
  CircleDashed = "CircleDashed",
}

interface ImgIcoProps {
  className?: string,
  ico: keyof typeof IcoName,
  width: number,
  height: number,
}

const ImgIco: FC<ImgIcoProps> = (props) => {
  const { className, ico, width, height } = props;

  return (
    createElement(
      lucide[ico],
      { className, width, height }
    )
  )
}

export { ImgIco }
export type {IcoName}