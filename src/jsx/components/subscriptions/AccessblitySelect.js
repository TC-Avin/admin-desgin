import React from "react";

import Select from "react-select";


const CustomClearText = () => "clear all";


const options = [
   { value: "user-filter",       label: "Use-Filter", },
   { value: "Excluding-Filter",  label: "Excluding-Filter", },
   { value: "Create-Team",       label: "Create-Team",},
];


const ClearIndicator = (props) => {
   const {
      children = <CustomClearText />,
      getStyles,
      innerProps: { ref, ...restInnerProps },
   } = props;
   return (
      <div
         {...restInnerProps}
         ref={ref}
         style={getStyles("clearIndicator", props)}
      >
         <div style={{ padding: "0px 5px" }}>{children}</div>
      </div>
   );
};

const ClearIndicatorStyles = (base, state) => ({
   ...base,
   cursor: "pointer",
   color: state.isFocused ? "blue" : "black",
});

export default function AccessblitySelect() {
   return (
      <Select
         closeMenuOnSelect={false}
         components={{ ClearIndicator }}
         styles={{ clearIndicator: ClearIndicatorStyles }}
         defaultValue={[options[0]]}
         isMulti
         options={options}
      />
   );
}
