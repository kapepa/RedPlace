import { FC } from "react"
import styles from "./Menu.module.scss";
import classNames from "classnames"
import { MenuItem } from "@/shared/ui/MenuItem";
import { RouterEnum } from "@/shared/enum/router.enum";
import { IcoName, ImgIco } from "@/shared/ui/ImgIco";

interface MenuProps {
  className?: string,
}

const Menu: FC<MenuProps> = (props) => {
  const { className } = props;

  const InnerChildren = ({ ico,text }: { ico: keyof typeof IcoName, text: string }) => {
    return (
      <div 
        className={classNames("flex items-center gap-2 hover:bg-border px-8 py-1 rounded-lg")}
        style={{
          width: "100%",
          alignItems: "start"
        }}
      >
        <ImgIco
          ico={ico}
          height={25}
          width={25} 
        />
        <span
          className="text-xl"
        >{text}</span>
      </div>
    )
  }

  return (
    <nav className={classNames("flex gap-4", className, styles.menu)}>
      <MenuItem 
        href={RouterEnum.HOME} 
        children={InnerChildren({ ico: "Home", text: "Home" })}
      />
      <MenuItem 
        href={RouterEnum.DASHBOARD} 
        children={InnerChildren({ ico: "KanbanSquare", text: "Dashboard" })} 
      />
      <MenuItem 
        href={RouterEnum.TASKS} 
        children={InnerChildren({ ico: "LayoutDashboard", text: "Tasks" })} 
      />
      <MenuItem 
        href={RouterEnum.TIMER} 
        children={InnerChildren({ ico: "Timer", text: "Timer" })} 
      />
      <MenuItem 
        href={RouterEnum.HABITS} 
        children={InnerChildren({ ico: "CircleDashed", text: "Habits" })} 
      />     
      <MenuItem 
        href={RouterEnum.MANAGEMENT} 
        children={InnerChildren({ ico: "CalendarDays", text: "Management" })} 
      />   
      <MenuItem 
        href={RouterEnum.SETTINGS} 
        children={InnerChildren({ ico: "Settings", text: "Settings" })} 
      /> 
    </nav>
  )
}

export {Menu};