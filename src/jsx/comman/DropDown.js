import React from "react";
import {
  Row,
  Col,
  Card,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  SplitButton,
} from "react-bootstrap";
const DropDown = (props) => {
  return (
    <div>
      {" "}
      <Dropdown>
        <Dropdown.Toggle variant="primary">
          {props.children}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {(props.data || ["1", "2"]).map((d) => {
            return( <Dropdown.Item href="#">{d}</Dropdown.Item>)
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropDown;
