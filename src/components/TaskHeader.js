import TaskModal from "./TaskModal";
import { useState } from "react";
import TaskForm from "./TaskForm";
import FilterTasks from "./FilterTasks";
import TaskCount from "./TaskCount";

// Header component to render title and the add task option
const TaskHeader = (props) => {
  const [toggle, setToggleModal] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center flex-col md:flex-row">
        <h1 className="text-3xl mb-6 text-slate-300">
          <span className=" font-light block">Welcome Purush!</span>
          <TaskCount />
        </h1>
        <div className="flex justify-center">
          <FilterTasks />
          <button
            className=" px-2 py-1.5  rounded-lg bg-purple-800 text-white 
            hover:bg-purple-950"
            type="button"
            onClick={() => {
              setToggleModal(!toggle);
            }}
          >
            + Add Tasks
          </button>
        </div>
      </div>

      {/* hiding and showing the modal based on the toggle state */}
      {toggle ? (
        <TaskModal
          title="Add new task"
          description="Scribble down what you would like to accomplish"
          closeCallback={setToggleModal}
        >
          <TaskForm
            getTasksList={props.getTasksList}
            closeCallback={setToggleModal}
            activeTask={null}
            toast={props.toast}
          />
        </TaskModal>
      ) : null}
    </>
  );
};

export default TaskHeader;
