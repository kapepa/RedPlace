'use client'

import { TaskBoard } from "@/entities/TaskBoard";
import { TaskList } from "@/entities/TaskList";
import { Button } from "@/shared/ui/Button";
import { ImgIco } from "@/shared/ui/ImgIco";
import classNames from "classnames";
import { Kanban, List } from "lucide-react";
import { FC, ReactNode, memo, useCallback, useMemo, useState } from "react";

interface TasksProps {
  className?: string,
}

enum eView {
  List = "list",
  Board = "board",
}

const Tasks: FC<TasksProps> = memo(
  (props) => {
    const {className} = props;
    const [view, setView] = useState<eView>(eView.List);
  
    const clickView = useCallback((val: eView) => {
      setView(val);
    }, [view])
  
    const template = useMemo(() => {
      switch(view) {
        case eView.List: 
          return <TaskList/>;
        case eView.Board: 
          return <TaskBoard/>;
      }
    }, [view])

    return (
      <div className={classNames("flex flex-col gap-5 py-6", className)}>
        <div className="flex gap-6">
          <Button 
            className="py-4"
            onClick={clickView.bind(null, eView.List)} 
            color={ view === eView.List ? "Default" : "OutlinedDefault"} 
            children={<ImgIco ico={List} height={30} width={30} />} 
          />
          <Button 
            className="py-4"
            onClick={clickView.bind(null, eView.Board)} 
            color={ view === eView.Board ? "Default" : "OutlinedDefault"} 
            children={<ImgIco ico={Kanban} height={30} width={30} />} 
          />
        </div>
        <div>
          {template}
        </div>
      </div>
    )
  }
)

export { Tasks }