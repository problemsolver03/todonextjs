"use client";

import TaskHeader from "./TaskHeader";
import TaskTable from "./TaskTable";

const Tasks = () => {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="border w-full p-8 rounded">
        <TaskHeader />
        <TaskTable />
      </div>
    </div>
  );
};

export default Tasks;
