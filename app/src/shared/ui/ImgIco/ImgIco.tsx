import { FC, createElement } from 'react'
import * as lucide from "lucide-react";

enum ImgSRC {
  Home = "Home",
  Timer = "Timer",
  KanbanSquare = "KanbanSquare",
  CalendarDays = "CalendarDays",
  LayoutDashboard = "LayoutDashboard",
  CircleDashed = "CircleDashed",
  Settings = "Settings",
}

interface ImgIcoProps {
  className?: string,
  ico: keyof typeof ImgSRC,
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
export type {ImgSRC}