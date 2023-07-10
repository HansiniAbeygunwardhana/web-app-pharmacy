import React from "react";
import "./Uploader.scss";
import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SourceIcon from "@mui/icons-material/Source";
import DeleteIcon from "@mui/icons-material/Delete";

const Uploader = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected File");
  return (
    <div className="Uploader">
      <div
        className="Uploader__uploadbutton"
        onClick={() => document.querySelector(".input-field").click()}
      >
        <input
          type="file"
          accept="image/*"
          className="input-field"
          hidden
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            if (files) setImage(URL.createObjectURL(files[0]));
          }}
        />
        {image ? (
          <img src={image} width={200} height={200} alt={fileName} />
        ) : (
          <>
            <CloudUploadIcon
              style={{ width: 60, height: 60, color: "#4DACC1" }}
            />
            <p>Browse Files To Upload</p>
          </>
        )}
      </div>
      <section className="uploaded-row">
        <SourceIcon />
        <span className="upload-content">
          {fileName}
          <DeleteIcon
            onClick={() => {
              setFileName("No Selected Files");
              setImage(null);
            }}
          />
        </span>
      </section>
    </div>
  );
};

export default Uploader;
