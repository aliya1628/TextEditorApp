import React from "react";
import "./ColorPicker.css";

export default function ColorPicker(props) {
  
  return (
      <input
        type="color"
        readOnly=""
        className="p-colorpicker p-component p-colorpicker-overlay p-colorpicker-preview "
        id="cp-hex"
        data-pc-section="input"
        style={{backgroundColor: props.currentColor}}
        onChange={props.toggleColor}
      />
  );
}
