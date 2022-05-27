import React from "react";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

const DropDownWithSelection = (props) => {
  return (
    <div className="form-group">
      <div id="multiselect">
        <DropdownMultiselect
          options={props.data || ["1", "2", "3", "4", "5", "6"]}
        />
      </div>
    </div>
  );
};

export default DropDownWithSelection;
