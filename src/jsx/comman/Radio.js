import React from "react";

const Radio = (props) => {
  return (
    <div>
      {" "}
      <div className="form-group mb-0">
        {(props.data || ["1", ""]).map((d) => {
          return (
            <div className="radio">
              <label>
                <input type="radio" name="optradio" /> {d}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Radio;
