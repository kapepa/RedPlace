'use client'

import { tTask } from "@/shared/types/task.types";
import { FC, memo, useCallback, useState } from "react";
import update from 'immutability-helper'
import classNames from "classnames";
import { DraggableRow } from "@/shared/ui/DraggableRow";
import { AddTaskRow } from "@/shared/ui/AddTaskRow";

interface DropContainerProps {
  className?: string,
  tasks: tTask[],
} 

const DropTBody: FC<DropContainerProps> = memo((props) => {
  const {tasks, className} = props;
  const [isTask, setTask] = useState<tTask[]>(tasks);
  const [isAdd, setAdd] = useState<boolean>(false);

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setTask((prevCards: tTask[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex] as tTask],
        ],
      }),
    )
  }, []);

  const updateTask = useCallback(() => {
    if(isAdd) {
      setTask((prev: tTask[]) => prev.slice(0, -1))
      setAdd(false);
    } else {
      setTask((prev: tTask[]) => [...prev, { id: "new", date: new Date(), priority: "High", text: "Set your new task",}])
      setAdd(true);
    }
  }, [isTask])

  const renderCard = useCallback(
    (task: tTask, index: number) => {
      return (
        <DraggableRow
          key={task.id}
          index={index}
          id={task.id}
          text={task.text}
          date={task.date}
          priority={task.priority}
          moveCard={moveCard}
        />
      )
    },
    [],
  )

  return (
    <tbody className={classNames(className)}>
      {isTask.map((card, i) => renderCard(card, i))}
      <AddTaskRow updateTask={updateTask}/>
    </tbody>
  )
})

export { DropTBody }