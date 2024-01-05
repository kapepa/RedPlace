import classNames from "classnames";
import { FC } from "react";

interface HeadingProps {
  className?: string,
  title: string,
}

const Heading: FC<HeadingProps> = (props) => {
  const { className, title } = props;

  return (
    <div className={classNames("border-solid border-b-2 border-border", className)}>
      <h1 className="text-xl font-noto font-medium">{title}</h1>
      <br />
    </div>
  )
}

export { Heading };