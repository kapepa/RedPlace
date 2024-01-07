import classNames from "classnames";
import styles from "./DraggableRow.module.scss";
import { FC } from "react";
import { Checkbox } from "@/shared/ui/Checkbox";
import { GripVertical } from "lucide-react";
import { ImgIco } from "@/shared/ui/ImgIco";



interface DraggableRowProps {
  text: string,
  date: Date,
  priority: any
}

const DraggableRow: FC<DraggableRowProps> = (props) => {
  const { text } = props;

  return (
    <tr>
      <td>
        <label className={classNames(styles.td_row,"flex items-center gap-2")}>
          <button>
            <ImgIco className={styles.td_row__ico} ico={GripVertical} height={30} width={30} />
          </button>
          <Checkbox/>
          <span>{text}</span>
        </label>
      </td>
      <td></td>
      <td>High</td>
    </tr>
  )
}

export { DraggableRow }