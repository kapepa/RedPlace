import classNames from "classnames";
import { FC } from "react";

interface TaskBoardProps {
  className?: string,
}

const TaskBoard: FC<TaskBoardProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(className)}>
      TaskBoard
    </div>
  )
};

export {TaskBoard}