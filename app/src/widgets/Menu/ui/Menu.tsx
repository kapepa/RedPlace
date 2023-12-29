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

  const InnerChildren = ({ src, alt, text }: { src: keyof typeof ImgSRC, alt: string, text: string }) => {
    return (
      <div className={classNames("flex justify-center items-center gap-2")}>
        <ImgIco
          src={src}
          alt={alt}
          height={30}
          width={30} 
        />
        <span
          className={styles.menu__text}
        >{text}</span>
      </div>
    )
  }

  return (
    <nav className={classNames(className, styles.menu)}>
      <MenuItem 
        className={styles.menu__items} 
        href={RouterEnum.HOME} 
        children={InnerChildren({ src: "HouseChimney", alt: "home", text: "Home" })} 
      />
      <MenuItem 
        className={styles.menu__items} 
        href={RouterEnum.DASHBOARD} 
        children={InnerChildren({ src: "LayoutFluid", alt: "dashboard", text: "Dashboard" })} 
      />
      <MenuItem 
        className={styles.menu__items} 
        href={RouterEnum.TASKS} 
        children={InnerChildren({ src: "SquareKanban", alt: "tasks", text: "Tasks" })} 
      />
      <MenuItem 
        className={styles.menu__items} 
        href={RouterEnum.TIMER} 
        children={InnerChildren({ src: "TimeForward", alt: "timer", text: "Timer" })} 
      />
      <MenuItem 
        className={styles.menu__items} 
        href={RouterEnum.HABITS} 
        children={InnerChildren({ src: "CircleDashed", alt: "habits", text: "Habits" })} 
      />     
      <MenuItem 
        className={styles.menu__items} 
        href={RouterEnum.MANAGEMENT} 
        children={InnerChildren({ src: "CalendarLines", alt: "management", text: "Management" })} 
      />   
      <MenuItem 
        className={styles.menu__items} 
        href={RouterEnum.SETTINGS} 
        children={InnerChildren({ src: "Settings", alt: "settings", text: "Settings" })} 

      /> 
    </nav>
  )
}

export {Menu};