import classNames from "classnames";
import { FC, ReactNode, ButtonHTMLAttributes } from "react";

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
  OutlinedDefault = "OutlinedDefault",
  OutlinedSecondary = "OutlinedSecondary",
  OutlinedDark = "OutlinedDark",
  OutlinedBlue = "OutlinedBlue",
  OutlinedRed = "OutlinedRed",
  OutlinedGreen = "OutlinedGreen",
  OutlinedPurple = "OutlinedPurple",
  OutlinedYellow = "OutlinedYellow",
  OutlinedOrange = "OutlinedOrange",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string,
  color: keyof typeof eButton,
  children: ReactNode
}

const Button: FC<ButtonProps> = (props) => {
  const {className, color, children, ...otherProps} = props;

  const BtnFrame = (classes: string) => {
    return (
      <button 
        className={classNames(classes, className)}
        {...otherProps}
      >
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
    case eButton.OutlinedDefault: 
      return BtnFrame("rounded-xl border-2 border-brand-500 px-5 py-3 text-base font-medium text-brand-500 transition duration-200 hover:bg-brand-600/5 active:bg-brand-700/5 dark:border-brand-400 dark:bg-brand-400/10 dark:text-white dark:hover:bg-brand-300/10 dark:active:bg-brand-200/10");
    case eButton.OutlinedSecondary: 
      return BtnFrame("rounded-xl border-2 border-gray-300 px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200/10 active:bg-gray-300/10 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20");
    case eButton.OutlinedDark: 
      return BtnFrame("rounded-xl border-2 border-navy-700 px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-navy-800/5 active:bg-navy-900/5 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20");  
    case eButton.OutlinedBlue: 
      return BtnFrame("rounded-xl border-2 border-blue-500 px-5 py-3 text-base font-medium text-blue-500 transition duration-200 hover:bg-blue-600/5 active:bg-blue-700/5 dark:border-blue-400 dark:bg-blue-400/10 dark:text-white dark:hover:bg-blue-300/10 dark:active:bg-blue-200/10");
    case eButton.OutlinedRed: 
      return BtnFrame("rounded-xl border-2 border-red-500 px-5 py-3 text-base font-medium text-red-500 transition duration-200 hover:bg-red-600/5 active:bg-red-700/5 dark:border-red-400 dark:bg-red-400/10 dark:text-white dark:hover:bg-red-300/10 dark:active:bg-red-200/10");    
    case eButton.OutlinedGreen: 
      return BtnFrame("rounded-xl border-2 border-green-500 px-5 py-3 text-base font-medium text-green-500 transition duration-200 hover:bg-green-600/5 active:bg-green-700/5 dark:border-green-400 dark:bg-green-400/10 dark:text-white dark:hover:bg-green-300/10 dark:active:bg-green-200/10"); 
    case eButton.OutlinedPurple: 
      return BtnFrame("rounded-xl border-2 border-purple-500 px-5 py-3 text-base font-medium text-purple-500 transition duration-200 hover:bg-purple-600/5 active:bg-purple-700/5 dark:border-purple-400 dark:bg-purple-400/10 dark:text-white dark:hover:bg-purple-300/10 dark:active:bg-purple-200/10");   
    case eButton.OutlinedYellow: 
      return BtnFrame("rounded-xl border-2 border-yellow-500 px-5 py-3 text-base font-medium text-yellow-500 transition duration-200 hover:bg-yellow-600/5 active:bg-yellow-700/5 dark:border-yellow-400 dark:bg-yellow-400/10 dark:text-white dark:hover:bg-yellow-300/10 dark:active:bg-yellow-200/10");   
    case eButton.OutlinedOrange: 
      return BtnFrame("rounded-xl border-2 border-orange-500 px-5 py-3 text-base font-medium text-orange-500 transition duration-200 hover:bg-orange-600/5 active:bg-orange-700/5 dark:border-orange-400 dark:bg-orange-400/10 dark:text-white dark:hover:bg-orange-300/10 dark:active:bg-orange-200/10");           
  }
}

export {Button};