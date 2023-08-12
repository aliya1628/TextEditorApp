import React, { useState } from "react";

export default function EditorSpace(props) {
  const [text, setText] = useState("");
  const handleOnClick = (event) => {
    let Id = event.target.id;
    let updatedText;
    console.log(event.target.id);
    if (Id === "upperCase") {
      updatedText = text.toUpperCase();
      setText(updatedText);
      props.showAlert("Converted to Upper Case", "success");
    } else if (Id === "lowerCase") {
      updatedText = text.toLowerCase();
      setText(updatedText);
      props.showAlert("Converted to Lower Case", "success");
    } else if (Id === "clearText") {
      setText("");
      props.showAlert("Text Cleared", "success");
    } else if (Id === "copyText") {
      navigator.clipboard.writeText(text);
      props.showAlert("Text Copied", "success");
    } else if (Id === "removeSpace") {
      updatedText = text.split(/[ ]+/);
      setText(updatedText.join(" "));
      props.showAlert("Space Removed", "success");
    }
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log(text);
  };
  return (
    <>
      <div className="container">
        <h1 className="mb-4">{props.heading}</h1>
        <div className="form-floating">
          <textarea
            className="form-control"
            id="floatingTextarea2"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              height: "200px",
              color: props.mode === "light" ? "black" : "white",
            }}
            value={text}
            onChange={handleOnChange}
            rows={8}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          type="button"
          id="upperCase"
          className="btn btn-primary my-3"
          onClick={handleOnClick}
        >
          Uppercase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          id="lowerCase"
          className="btn btn-primary mx-2"
          onClick={handleOnClick}
        >
          Lowercase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          id="clearText"
          className="btn btn-primary mx-2"
          onClick={handleOnClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          id="copyText"
          className="btn btn-primary mx-2"
          onClick={handleOnClick}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          id="removeSpace"
          className="btn btn-primary mx-2"
          onClick={handleOnClick}
        >
          Remove Extra space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your text Summary </h1>

        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          } {" "}
          words and {text.length} characters
        </p>

        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length} {" "}
          Minutes Read
        </p>
        <h2>Preview here..</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
