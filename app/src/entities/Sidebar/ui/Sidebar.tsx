import { FC } from "react";
import styles from "./Sidebar.module.scss";
import { Menu } from "@/widgets/Menu";
import { CalendarDays } from "lucide-react";

interface SidebarProps {
  className?: string,
}

const Sidebar: FC<SidebarProps> = (props) => {
  const {className} = props;

  return (
    <aside className={className}>
      <Menu/>
    </aside>
  )
}

export {Sidebar};