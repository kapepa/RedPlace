import Image from 'next/image'
import { FC, createElement } from 'react'
import * as lucide from "lucide-react";

enum ImgSRC {
  CalendarDays = "CalendarDays",
  // CalendarLines = "calendar-lines.svg",
  // CircleDashed = "circle-dashed.svg",
  // LayoutFluid = "layout-fluid.svg",
  // Settings = "settings.svg",
  // SquareKanban = "square-kanban.svg",
  // TimeForward = "time-forward.svg",
  // HouseChimney = "house-chimney.svg",
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