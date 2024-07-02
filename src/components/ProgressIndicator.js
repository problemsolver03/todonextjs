import React from "react";

const ProgressIndicator = (props) => {
  if (props.type == "inprogress") {
    return (
      <>
        <span
          className={`inline-block w-4 h-4 rounded-full bg-yellow-400 `}
        ></span>
      </>
    );
  } else if (props.type == "done") {
    return (
      <>
        <span
          className={`inline-block w-4 h-4 rounded-full bg-green-600 `}
        ></span>
      </>
    );
  }

  return (
    <>
      <span className={`inline-block w-4 h-4 rounded-full bg-gray-600 `}></span>
    </>
  );
};

export default ProgressIndicator;
