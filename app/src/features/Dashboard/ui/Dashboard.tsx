import { Button } from "@/shared/ui/Button"
import classNames from "classnames"
import { FC } from "react"

interface DashboardProps {
  className?: string,
}

const Dashboard: FC<DashboardProps> = (props) => {
  const {className} = props

  return (
    <div className={classNames(className)}>
      <Button color="OutlinedDefault">Button</Button>
    </div>
  )
}

export { Dashboard };