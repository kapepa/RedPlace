'use client'

import classNames from "classnames";
import { FC } from "react";
import styles from "./TaskList.module.scss";
import { DropTBody } from "@/widgets/DropTBody";
import { tTask } from "@/shared/types/task.types";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface TaskListProps {
  className?: string,
}

const TaskList: FC<TaskListProps> = (props) => {
  const {className} = props;

  const task: tTask[] = [
    { id: "1", text: "finish user registration! You can to use all property!", date: new Date(), priority: "High" },
    { id: "2", text: "start user delete", date: new Date(), priority: "High" },
    { id: "3", text: "update user", date: new Date(), priority: "High" },
    { id: "4", text: "find user", date: new Date(), priority: "High" },
  ]

  return (
    <DndProvider backend={HTML5Backend}>
      <table className={classNames(styles.task_list, className)}>
        <thead className={classNames(styles.task_list__row, styles.task_list__head)}>
          <tr>
            <th>Task name</th>
            <th>Due date</th>
            <th>Priority</th>
          </tr>
        </thead>
        <DropTBody 
          tasks={task}
          className={classNames(styles.task_list__row, styles.task_list__body)}
        />
      </table>
    </DndProvider>
  )
}

export {TaskList};