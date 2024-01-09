'use client'

import type { Identifier, XYCoord } from 'dnd-core'
import type { FC } from 'react'
import { useMemo, useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { tTask } from '@/shared/types/task.types'
import classNames from 'classnames'
import { ImgIco } from '@/shared/ui/ImgIco'
import { Checkbox } from '@/shared/ui/Checkbox'
import { GripVertical } from 'lucide-react'
import { ItemTypes } from '@/entities/TaskList/ui/ItemTypes'

interface DragTD extends tTask{
  index: number
}

interface iDrag extends DragTD {
  type: string
}

export interface DraggableRowProps extends DragTD {
  moveCard: (dragIndex: number, hoverIndex: number) => void
}

const DraggableRow: FC<DraggableRowProps> = (props) => {
  const { id, text, index, date, priority, moveCard } = props;
  const month: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const ref = useRef<any>(null)
  const [{ handlerId }, drop] = useDrop<
    iDrag,
    void,
    { handlerId: Identifier | null }
  >({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(asset: DragTD, monitor) {
      if (!ref.current) return
      const dragIndex = asset.index
      const hoverIndex = index
      
      if (dragIndex === hoverIndex) return

      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return

      moveCard(dragIndex, hoverIndex)
      asset.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index }
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  })

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

  const opacity = isDragging ? 0 : 1
  drag(drop(ref))
  
  return (
    <tr ref={ref} data-handler-id={handlerId}>
      <td>
        <label className={classNames("flex items-center gap-2")}>
          <button>
            <ImgIco  ico={GripVertical} height={30} width={30} />
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