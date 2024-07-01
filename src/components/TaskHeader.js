import { HiOutlineSearch } from "react-icons/hi";
import TaskModal from "./TaskModal";
import { useState } from "react";
import TaskForm from "./TaskForm";
const TaskHeader = () => {
  const [toggle, setToggleModal] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center pb-5">
        <h1 className="text-2xl font-bold">Simple task manager</h1>
        <button
          className="bg-blue-800 px-2 py-1.5 text-white rounded hover:bg-blue-900"
          type="button"
          onClick={() => {
            setToggleModal(!toggle);
          }}
        >
          + Add Tasks
        </button>
      </div>
      <div className="relative">
        <HiOutlineSearch
          className="left-2 text-gray-600 absolute top-[10px]"
          size={"20px"}
        />
        <input
          type="text"
          className="border p-2 w-[360px] rounded-lg bg-slate-100 pl-8"
          placeholder="Search for tasks..."
        />
      </div>
      {toggle ? (
        <TaskModal
          title="Add new task"
          description="Scribble down what you would like to accomplish"
          closeCallback={setToggleModal}
        >
          <TaskForm />
        </TaskModal>
      ) : null}
    </>
  );
};

export default TaskHeader;
