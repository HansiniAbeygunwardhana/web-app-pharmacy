import React from "react";
import { useEffect } from "react";
import "./PrescriptForm.scss";
import Uploader from "../../Uploader/Uploader";
import { Radio } from "antd";
import { useState } from "react";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import CircleIcon from "@mui/icons-material/Circle";
import PrescriptionService from "../../../Services/PrescriptionService";

const PrescriptForm = () => {
  // const [frequency, setFrequency] = useState(1);
  // const [fulfil, setFulfil] = useState(1);
  // const [substitutes, setSubstitutes] = useState(1);

  // const handleFrequencyChange = (e) => {
  //   console.log("radio checked", e.target.value);
  //   setFrequency(e.target.value);
  // };
  // const handleFulfilChange = (e) => {
  //   console.log("radio checked", e.target.value);
  //   setFulfil(e.target.value);
  // };
  // const handleSubstituteChange = (e) => {
  //   console.log("radio checked", e.target.value);
  //   setSubstitutes(e.target.value);
  // };
  const [formData, setFormData] = useState({
    frequency: "",
    fulfilment: "",
    substitute: "",
    file: null,
  });
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const [selectedFileName, setSelectedFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      file: file,
    }));
    setSelectedFileName(file ? file.name : "");
  };
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { file, ...otherFormData } = formData;

    try {
      const prescriptionData = new FormData();
      prescriptionData.append("file", file); // Append the file to form data
      Object.entries(otherFormData).forEach(([key, value]) => {
        prescriptionData.append(key, value); // Append other form fields to form data
      });

      // Send the form data to the server for upload
      if (formData.id) {
        await PrescriptionService.createPrescription(
          formData.id,
          prescriptionData
        );
      } else {
        await PrescriptionService.createPrescription(prescriptionData);
      }
    } catch (error) {
      console.error("Error uploading prescription:", error);
    }
  };

  return (
    <div className="PrescriptUpload">
      <div className="PrescriptHeader">
        <div>
          <h5>UPLOAD YOUR PRESCRIPTION HERE</h5>
        </div>
      </div>
      <form
        className="PrescriptForm"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="PrescriptForm__container">
          <div className="PrescriptForm__container__descrpt">
            <p>
              Please upload an image of your medical prescription issued by a
              SLMC registered doctor. Prescription drugs will only be issued if
              a valid prescription image is provided.
            </p>
          </div>
          <div
            className="PrescriptForm__container__uploader"
            id="file"
            name="file"
            type="file"
            onChange={handleFileChange}
          >
            <Uploader />
          </div>
        </div>
        <div className="PrescriptForm__container">
          <div className="PrescriptForm__container__form">
            <div className="PrescriptForm__container__form__field">
              <div className="PrescriptForm__container__form__field__title">
                Frequency
              </div>
              <Radio.Group
                onChange={handleChange}
                value={formData.frequency}
                id="frequency"
                name="frequency"
              >
                <Radio value={"oneTime"}>One Time</Radio>
                <Radio value={"onGoing"}>On Going</Radio>
              </Radio.Group>
            </div>
            <div className="PrescriptForm__container__form__field">
              <div className="PrescriptForm__container__form__field__title">
                Fulfillment
              </div>
              <Radio.Group
                onChange={handleChange}
                value={formData.fulfilment}
                id="fulfilment"
                name="fulfilment"
              >
                <Radio value={"full"}>Full</Radio>
                <Radio value={"partial"}>Partial</Radio>
              </Radio.Group>
            </div>
            <div className="PrescriptForm__container__form__field">
              <div className="PrescriptForm__container__form__field__title">
                I am Okay to receive substitutes
              </div>
              <Radio.Group
                onChange={handleChange}
                value={formData.substitute}
                id="substitute"
                name="substitute"
              >
                <Radio value={"yes"}>Yes</Radio>
                <Radio value={"no"}>No</Radio>
              </Radio.Group>
            </div>
            {/* <div className="PrescriptForm__container__form__field">
              <div className="PrescriptForm__container__form__field__title">
                Any additional notes
              </div>
              <textarea
                className="PrescriptForm__container__form__field__textarea"
                rows={5}
                placeholder="If you want to let us know anything, please write here..."
              ></textarea>
            </div> */}
          </div>
          <button className="PrescriptForm__container__button" type="submit">
            <PrimaryButton btnContent={"SUBMIT"} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default PrescriptForm;
