'use client'

import { DRAGS } from "@/shared/enum/drags.enum";
import { tTask } from "@/shared/types/task.types";
import { FC, memo, useMemo, useRef, useState } from "react";
import { DropTargetMonitor, useDrop } from "react-dnd";
import { DraggableRow } from "../DraggableRow";

interface DropContainerProps {
  className?: string;
  tasks: tTask[];
}

const DropTBody: FC<DropContainerProps> = memo((props) => {
  const {className, tasks} = props;
  const [sortedItemsTasks, setSortedTasks] = useState(tasks);
  const ref = useRef<HTMLTableSectionElement | null>(null);

  const moveTask = (dragIndex: number, hoverIndex: number) => {
    const draggedItem = sortedItemsTasks[dragIndex];
    const newItems = [...sortedItemsTasks];
    newItems.splice(dragIndex, 1);
    newItems.splice(hoverIndex, 0, draggedItem);
    setSortedTasks(newItems);
  };

  const [, drop] = useDrop({
    accept: DRAGS.Task,
    hover: (item: { id: string; index: number }, monitor: DropTargetMonitor) => {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = sortedItemsTasks.length;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveTask(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const tasksMap = useMemo(() => {
    return (
      sortedItemsTasks.map(
        (task: tTask, index: number) => (
          <DraggableRow 
            key={`${task.id}-${index}`} 
            id={task.id} 
            asset={task}
            index={index} 
            moveItem={moveTask}
          />
        ))
    )
  },[tasks])
  
  return (
      <tbody className={className} ref={ref}>
        {tasksMap}
      </tbody>
    )
  }
)

export { DropTBody }