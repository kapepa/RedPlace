import classNames from "classnames";
import { FC } from "react";
import styles from "./TaskList.module.scss";
import { DraggableRow } from "@/shared/ui/DraggableRow";

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
        <DraggableRow 
          text="finish user registration" 
          date={""}
        />
        {/* <tr className={styles.task_list__tr}>
          <td colSpan={3}>
            To Do
          </td>
        </tr> */}
      </tbody>
    </table>
  )
}

export {TaskList};