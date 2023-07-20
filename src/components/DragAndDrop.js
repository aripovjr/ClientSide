import React, { useRef, useState } from "react";
import { BiCloudUpload } from "react-icons/bi";
import classes from "../styles/DropZone.module.css";
import { Button } from "react-bootstrap";

function DragAndDrop() {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();
  const handlerDragOver = (event) => {
    event.preventDefault();
    console.log(event);
  };

  const handleDrop = (event) => {
    event.preventDefault();

    setFiles(event.dataTransfer.files);
  };

  if (files)
    return (
      <div className={classes.dropzone}>
        <ul>
          {Array.from(files).map((file, idx) => (
            <li key={idx}>{file.name}</li>
          ))}
        </ul>
      </div>
    );

  return (
    <>
      {!files && (
        <div
          className={classes.dropzone}
          onDragOver={handlerDragOver}
          onDrop={handleDrop}
        >
          <p>Drag and Drop image to Upload</p>
          <input
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            ref={inputRef}
          />
          <BiCloudUpload className={classes.uploadIcon} />
          <Button onClick={() => inputRef.current.click()}>Select Image</Button>
        </div>
      )}
    </>
  );
}

export default DragAndDrop;
