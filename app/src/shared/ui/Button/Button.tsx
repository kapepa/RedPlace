import classNames from "classnames";
import { FC, ReactNode } from "react";

enum eButton {
  Default = "Default",
  Secondary = "Secondary",
  Dark = "Dark",
  Blue = "Blue",
  Red = "Red",
  Green = "Green",
  Purple = "Purple",
  Yellow = "Yellow",
  Orange = "Orange",
}

interface ButtonProps {
  className?: string,
  color: keyof typeof eButton,
  children: ReactNode
}

const Button: FC<ButtonProps> = (props) => {
  const {className, color, children} = props;

  const BtnFrame = (classes: string) => {
    return (
      <button className={classNames(classes, className)}>
        {children}
      </button>
    )
  }

  switch (color) {
    case eButton.Default: 
      return BtnFrame("rounded-xl bg-brand-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200");
    case eButton.Secondary: 
      return BtnFrame("rounded-xl bg-gray-100 px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30");
    case eButton.Dark: 
      return BtnFrame("rounded-xl bg-navy-700 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-navy-800 active:bg-navy-900 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30");  
    case eButton.Blue: 
      return BtnFrame("rounded-xl bg-blue-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-400 dark:text-white dark:hover:bg-blue-300 dark:active:bg-blue-200");
    case eButton.Red: 
      return BtnFrame("rounded-xl bg-red-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-red-600 active:bg-red-700 dark:bg-red-400 dark:text-white dark:hover:bg-red-300 dark:active:bg-red-200");    
    case eButton.Green: 
      return BtnFrame("rounded-xl bg-green-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-green-600 active:bg-green-700 dark:bg-green-400 dark:text-white dark:hover:bg-green-300 dark:active:bg-green-200"); 
    case eButton.Purple: 
      return BtnFrame("rounded-xl bg-purple-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-purple-600 active:bg-purple-700 dark:bg-purple-400 dark:text-white dark:hover:bg-purple-300 dark:active:bg-purple-200");   
    case eButton.Yellow: 
      return BtnFrame("rounded-xl bg-yellow-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-yellow-600 active:bg-yellow-700 dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-300 dark:active:bg-yellow-200");   
    case eButton.Orange: 
      return BtnFrame("rounded-xl bg-orange-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-orange-600 active:bg-orange-700 dark:bg-orange-400 dark:text-white dark:hover:bg-orange-300 dark:active:bg-orange-200");        
  }
}

export {Button};