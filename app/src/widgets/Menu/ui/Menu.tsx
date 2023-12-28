import { FC } from "react"
import styles from "./Menu.module.scss";
import classNames from "classnames"
import { MenuItem } from "@/shared/ui/MenuItem";
import { RouterEnum } from "@/shared/enum/router.enum";

interface MenuProps {
  className?: string,
}

const Menu: FC<MenuProps> = (props) => {
  const { className } = props;

  return (
    <nav className={classNames(className, styles.menu)}>
      <MenuItem className={styles.menu__items} href={RouterEnum.HOME} children={"Home"} />
      <MenuItem className={styles.menu__items} href={RouterEnum.PUBLIC} children={"Public"} />
      <MenuItem className={styles.menu__items} href={RouterEnum.DASHBOARD} children={"Dashboard"} />
    </nav>
  )
}

export {Menu};