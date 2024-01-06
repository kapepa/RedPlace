import classNames from "classnames";
import { FC } from "react";
import styles from "./TaskList.module.scss";
import { Checkbox } from "@/shared/ui/Checkbox";

interface TaskListProps {
  className?: string,
}

const TaskList: FC<TaskListProps> = (props) => {
  const {className} = props;

  return (
    <table className={classNames(styles.task_list, className)}>
      <thead className={classNames(styles.task_list__row, styles.task_list__head)}>
        <tr >
          <th>Task name</th>
          <th>Due date</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody className={classNames(styles.task_list__row, styles.task_list__body)}>
        <tr>
          <td>
            <label className="flex items-center gap-2">
              <Checkbox/>
              <span>finish user registration</span>
            </label>
          </td>
          <td>25 DEC 2024</td>
          <td>High</td>
        </tr>
        <tr className={styles.task_list__tr}>
          <td colSpan={3}>
            To Do
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export {TaskList};