import Image from 'next/image'
import { FC } from 'react'

enum ImgSRC {
  CalendarLines = "calendar-lines.svg",
  CircleDashed = "circle-dashed.svg",
  LayoutFluid = "layout-fluid.svg",
  Settings = "settings.svg",
  SquareKanban = "square-kanban.svg",
  TimeForward = "time-forward.svg",
  HouseChimney = "house-chimney.svg",
}

interface ImgIcoProps {
  className?: string,
  src: keyof typeof ImgSRC,
  alt: string,
  width: number,
  height: number,
}

const ImgIco: FC<ImgIcoProps> = (props) => {
  const { className, src, alt, width, height } = props;

  return (
    <Image 
      className={className}
      src={`/svg/${ImgSRC[src]}`}
      width={width}
      height={height}
      alt={alt}
    />
  )
}

export { ImgIco }
export type {ImgSRC}