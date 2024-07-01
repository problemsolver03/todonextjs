"use client";

import { useState } from "react";
import ProgressIndicator from "./ProgressIndicator";
import TaskModal from "./TaskModal";
import TaskForm from "./TaskForm";
const TaskTable = () => {
  const [modalSts, setModalSts] = useState(false);
  return (
    <div className="border rounded-lg mt-8">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left text-gray-600 font-normal text-sm p-3">
              Title
            </th>
            <th className="text-left text-gray-600 font-normal text-sm p-3">
              Description
            </th>
            <th
              className="text-left text-gray-600 font-normal text-sm p-3"
              colSpan={2}
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t hover:bg-indigo-100">
            <td className="text-indigo-900 p-2.5 ">Finish project</td>
            <td className="text-indigo-900 p-2.5 ">
              Complte the pesto application for submission{" "}
            </td>
            <td className="text-indigo-900 p-2.5 ">
              <div className="flex  items-center">
                <ProgressIndicator type="inprogress" designType="icon" />
              </div>
            </td>
            <td className="text-indigo-900 p-2.5 ">
              <button
                type="button"
                className="bg-slate-800 text-white rounded-full px-3 py-1 text-sm hover:bg-slate-900"
                onClick={() => {
                  setModalSts(!modalSts);
                }}
              >
                Update Status
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {modalSts ? (
        <TaskModal
          title="Update task status"
          description="Based on the current please select the applicable status and press the update button"
          closeCallback={setModalSts}
        >
          <TaskForm />
        </TaskModal>
      ) : null}
    </div>
  );
};

export default TaskTable;
