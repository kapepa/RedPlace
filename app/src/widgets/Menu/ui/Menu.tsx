import { FC } from "react"
import styles from "./Menu.module.scss";
import classNames from "classnames"
import { MenuItem } from "@/shared/ui/MenuItem";
import { RouterEnum } from "@/shared/enum/router.enum";
import { ImgIco, ImgSRC } from "@/shared/ui/ImgIco";

interface MenuProps {
  className?: string,
}

const Menu: FC<MenuProps> = (props) => {
  const { className } = props;

  const InnerChildren = ({ ico,text }: { ico: keyof typeof ImgSRC, text: string }) => {
    return (
      <div className={classNames("flex justify-center items-center gap-2")}>
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
    <nav className={classNames(className, styles.menu)}>
      <MenuItem 
        className={styles.menu__items} 
        href={RouterEnum.HOME} 
        children={InnerChildren({ ico: "Home", text: "Home" })} 
      />
      <MenuItem 
        className={styles.menu__items} 
        href={RouterEnum.DASHBOARD} 
        children={InnerChildren({ ico: "KanbanSquare", text: "Dashboard" })} 
      />
      <MenuItem 
        className={styles.menu__items} 
        href={RouterEnum.TASKS} 
        children={InnerChildren({ ico: "LayoutDashboard", text: "Tasks" })} 
      />
      <MenuItem 
        className={styles.menu__items} 
        href={RouterEnum.TIMER} 
        children={InnerChildren({ ico: "Timer", text: "Timer" })} 
      />
      <MenuItem 
        className={styles.menu__items} 
        href={RouterEnum.HABITS} 
        children={InnerChildren({ ico: "CircleDashed", text: "Habits" })} 
      />     
      <MenuItem 
        className={styles.menu__items} 
        href={RouterEnum.MANAGEMENT} 
        children={InnerChildren({ ico: "CalendarDays", text: "Management" })} 
      />   
      <MenuItem 
        className={styles.menu__items} 
        href={RouterEnum.SETTINGS} 
        children={InnerChildren({ ico: "Settings", text: "Settings" })} 
      /> 
    </nav>
  )
}

export {Menu};