'use client'

import classNames from "classnames";
import styles from "./DraggableRow.module.scss";
import { FC, useMemo } from "react";
import { Checkbox } from "@/shared/ui/Checkbox";
import { GripVertical } from "lucide-react";
import { ImgIco } from "@/shared/ui/ImgIco";
import { tTask } from "@/shared/types/task.types";
import { useDrag } from "react-dnd";
import { DRAGS } from "@/shared/enum/drags.enum";

interface DraggableRowProps {
  id: string,
  index: number,
  asset: tTask,
  moveItem: (dragIndex: number, hoverIndex: number) => void;
}

const DraggableRow: FC<DraggableRowProps> = (props) => {
  const { id, index, asset: { text, priority, date } } = props;
  const [, drag] = useDrag({
    type: DRAGS.Task,
    item: { id, index },
  });
  const month: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const getDate = useMemo(
    () => {
      const toDate = new Date(date);
      const getDay = toDate.getDate();
      const getMonth = toDate.getMonth();
      const gatYears = toDate.getFullYear();

      return `${getDay} ${month[getMonth]} ${gatYears}`
    }, 
    [date]
  )

  return (
    <tr ref={drag}>
      <td>
        <label className={classNames(styles.td_row,"flex items-center gap-2")}>
          <button>
            <ImgIco className={styles.td_row__ico} ico={GripVertical} height={30} width={30} />
          </button>
          <Checkbox/>
          <span>{text}</span>
        </label>
      </td>
      <td>{getDate}</td>
      <td>{priority}</td>
    </tr>
  )
}

export { DraggableRow }