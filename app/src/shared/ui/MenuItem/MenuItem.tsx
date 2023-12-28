import { FC, ReactNode } from "react";
import styles from "./MenuItem.module.scss";
import Link from 'next/link'
import classNames from "classnames";
import { MenuItemTypes } from ".";

interface MenuItemProps extends MenuItemTypes {
  className?: string,
}

const MenuItem: FC<MenuItemProps> = (props) => {
  const {className, href, children} = props;
  
  return (
    <Link 
      className={classNames(styles.menu_item ,className)} 
      href={href}
      children={children}
    />
  )
}

export {MenuItem};