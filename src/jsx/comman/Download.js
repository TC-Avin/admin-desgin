import React from "react";
import Radio from "./Radio";

const Download = () => {
  return (
    <div className="d-flex flex-column ">
      <Radio
        data={["Specific # of leads", "Only selected leads (1)", "All leads"]}
      ></Radio>
    </div>
  );
};

export default Download;
