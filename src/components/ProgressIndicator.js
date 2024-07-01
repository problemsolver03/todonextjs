import React from "react";

const ProgressIndicator = (props) => {
  if (props.type == "inprogress") {
    return (
      <>
        <span
          className={`inline-block w-4 h-4  rounded-full bg-yellow-400 ${
            props.designType === "icon" ? "visible" : "hidden"
          }`}
        ></span>
        <span className={`pl-2 capitalize text-yellow-500`}>{props.type}</span>
      </>
    );
  } else if (props.type == "done") {
    return (
      <>
        <span
          className={`inline-block w-4 h-4  rounded-full bg-green-600 ${
            props.designType === "icon" ? "visible" : "hidden"
          }`}
        ></span>
        <span className={`pl-2 capitalize text-green-700`}>{props.type}</span>
      </>
    );
  }

  return (
    <>
      <span
        className={`inline-block w-4 h-4  rounded-full bg-gray-600 ${
          props.designType === "icon" ? "visible" : "hidden"
        }`}
      ></span>
      <span className={`pl-2 capitalize text-gray-700`}>{props.type}</span>
    </>
  );
};

export default ProgressIndicator;
