"use client";

import TaskHeader from "./TaskHeader";
import TaskTable from "./TaskTable";
import axios from "axios";
import { updateTasks } from "@/stores/tasksSlice";
import { useAppDispatch } from "@/app/hooks";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tasks = (props) => {
  const dispatch = useAppDispatch();

  const getTasksList = () => {
    axios
      .get(`/api/gettasks?id=${props.user.value.id}`, {
        headers: { Authorization: `Bearer ${props.user.value.token}` },
      })
      .then((res) => {
        if (res.data.success) {
          dispatch(updateTasks([...res.data.tasks]));
        } else {
          dispatch(updateTasks([]));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
      <div className=" w-full p-8 rounded">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <TaskHeader getTasksList={getTasksList} toast={toast} />
        <TaskTable getTasksList={getTasksList} toast={toast} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {})(Tasks);
