"use client";

import { useState, useEffect } from "react";
import TaskModal from "./TaskModal";
import TaskForm from "./TaskForm";
import { connect } from "react-redux";
import TaskCard from "./TaskCard";

const TaskTable = (props) => {
  const [modalSts, setModalSts] = useState(false);
  const [activeTask, setActiveTask] = useState(null);

  useEffect(() => {
    props.getTasksList();
  }, []);

  return (
    <div className=" rounded-lg mt-8">
      {/* returing the list task as card designs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {props.tasks.value.map((task, i) => {
          return (
            <TaskCard
              key={i}
              task={task}
              setActiveTask={setActiveTask}
              setModalSts={setModalSts}
              modalsts={modalSts}
            />
          );
        })}
      </div>

      {/* showing a form with prefiled details to edit/update the tasks */}
      {modalSts ? (
        <TaskModal
          title="Update task status"
          description="Based on the current please select the applicable status and press the update button"
          closeCallback={setModalSts}
        >
          <TaskForm
            getTasksList={props.getTasksList}
            closeCallback={setModalSts}
            activeTask={activeTask}
            toast={props.toast}
          />
        </TaskModal>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, {})(TaskTable);
