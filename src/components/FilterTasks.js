import React from "react";
import { connect } from "react-redux";
import { updateTasks } from "@/stores/tasksSlice";
import { useAppDispatch } from "@/app/hooks";
import axios from "axios";

const FilterTasks = (props) => {
  const dispatch = useAppDispatch();
  const getTasksList = (status) => {
    axios
      .get(`/api/gettasks?id=${props.user.value.id}&status=${status}`, {
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
    <select
      className="border-slate-400 border-[3px] p-2 rounded-lg mr-2 px-3"
      onChange={(e) => {
        getTasksList(e.target.value);
      }}
    >
      <option value="">Filter tasks by status</option>

      <option value="todo">Todo</option>
      <option value="inprogress">In Progress</option>
      <option value="done">Done</option>
    </select>
  );
};

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, {})(FilterTasks);
