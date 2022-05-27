import React from "react";

const CheckBox = () => {
  return (
    <div>
      <div className="form-group">
        <div className="form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="check1"
            value=""
            defaultChecked
          />
          <label className="form-check-label" htmlFor="check1">
            Option 1
          </label>
        </div>
        <div className="form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="check2"
            value=""
          />
          <label className="form-check-label" htmlFor="check2">
            Option 2
          </label>
        </div>
      </div>
    </div>
  );
};

export default CheckBox;
