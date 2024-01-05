import { Tasks } from "@/features/Tasks";
import { Heading } from "@/widgets/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Task',
};

export default function TaskPage () {
  return (
    <div className="flex flex-col p-8 ">
      <Heading title="Task"/>
      <Tasks/>
    </div>
  )
}