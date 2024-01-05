import classNames from "classnames";
import { FC } from "react";

interface TaskListProps {
  className?: string,
}

const TaskList: FC<TaskListProps> = (props) => {
  const {className} = props;

  return (
    <div className={classNames(className)}>
      <table>
        <thead>
          <tr>
            <th>Task name</th>
            <th>Due date</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>finish user registration</td>
            <td>25 DEC 2024</td>
            <td>High</td>
          </tr>
        </tbody>
      </table>
  </div>
  )
}

export {TaskList};