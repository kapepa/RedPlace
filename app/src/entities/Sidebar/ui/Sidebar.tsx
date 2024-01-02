import { FC } from "react";
import styles from "./Sidebar.module.scss";
import { Menu } from "@/widgets/Menu";
import { CalendarDays } from "lucide-react";
import { Logo } from "@/widgets/Logo/ui/Logo";
import classNames from "classnames";

interface SidebarProps {
  className?: string,
}

const Sidebar: FC<SidebarProps> = (props) => {
  const {className} = props;

  return (
    <aside className={classNames(
      className, 
      "flex flex-col gap-2 border-solid border-r-2 border-sky-white-color p-8"
    )}>
      <Logo/>
      <Menu/>
    </aside>
  )
}

export {Sidebar};