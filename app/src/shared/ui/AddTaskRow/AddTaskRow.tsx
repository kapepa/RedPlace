'use client'

import classNames from "classnames";
import { FC, memo, useCallback } from "react";

interface AddTaskRowProps {
  className?: string,
  updateTask: () => void,
}

const AddTaskRow: FC<AddTaskRowProps> = memo((props) => {
  const { className, updateTask } = props;

  const clickAdd = useCallback(() => {
    updateTask()
  }, [updateTask]);

  return (
    <tr className={classNames(className)}>
      <td>
        <button className="italic" onClick={clickAdd}>Add task...</button>
      </td>
    </tr>
  )
});

export { AddTaskRow };