import React from "react";
import ProgressIndicator from "./ProgressIndicator";
import { prettyDate } from "@/common/dateformat";

const TaskCard = (props) => {
  const stsColor = (sts) => {
    switch (sts) {
      case "done":
        return "border-b-green-500";
      case "inprogress":
        return "border-b-yellow-500";
      default:
        return "border-b-slate-500";
    }
  };
  return (
    <div
      className={`group shadow-lg p-5 rounded-lg relative ${stsColor(
        props.task.status
      )} border-b-8 cursor-pointer hover:bg-slate-200  bg-white`}
      onClick={() => {
        props.setActiveTask(props.task);
        props.setModalSts(!props.modalSts);
      }}
    >
      <p className="mb-4 flex items-center">
        <ProgressIndicator type={props.task.status} designType="icon" />
        <span className="text-[13px] ml-2 capitalize text-slate-500 font-semibold">
          {props.task.status}
        </span>
      </p>
      <p className="text-[13px] mb-2 text-slate-400 font-medium">
        {prettyDate(props.task.created_at)}
      </p>
      <p className="text-lg font-semibold text-slate-700 capitalize">
        {props.task.title}
      </p>
      <p className="text-sm font-medium text-slate-500 pb-2">
        {props.task.description}
      </p>

      <p className="invisible group-hover:visible absolute bg-slate-900 text-center text-white text-sm p-2 py-0.5 w-full left-0 bg-opacity-60 bottom-0 ">
        Click to edit
      </p>
    </div>
  );
};

export default TaskCard;
