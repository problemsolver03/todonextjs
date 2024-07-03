import { useEffect, useState } from "react";
import { connect } from "react-redux";

const TaskCount = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let tasks = props.tasks.value;

    let list = tasks.filter((task, i) => {
      return task.status !== "done";
    });
    setCount(list.length);
  }, [props]);
  return (
    <span className="text-base block">
      You have{" "}
      <span className="bg-slate-200 text-slate-800 px-1 rounded">{count}</span>{" "}
      tasks to address.
    </span>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, {})(TaskCount);
