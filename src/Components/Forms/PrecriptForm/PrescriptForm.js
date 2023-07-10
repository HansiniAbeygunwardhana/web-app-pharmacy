import React from "react";
import "./PrescriptForm.scss";
import Uploader from "../../Uploader/Uploader";
import { Radio } from "antd";
import { useState } from "react";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import CircleIcon from "@mui/icons-material/Circle";

const PrescriptForm = () => {
  const [frequency, setFrequency] = useState(1);
  const [fulfil, setFulfil] = useState(1);
  const [substitutes, setSubstitutes] = useState(1);
  const handleFrequencyChange = (e) => {
    console.log("radio checked", e.target.value);
    setFrequency(e.target.value);
  };
  const handleFulfilChange = (e) => {
    console.log("radio checked", e.target.value);
    setFulfil(e.target.value);
  };
  const handleSubstituteChange = (e) => {
    console.log("radio checked", e.target.value);
    setSubstitutes(e.target.value);
  };
  return (
    <div className="PrescriptUpload">
      <div className="PrescriptHeader">
        <div>
          <h5>UPLOAD YOUR PRESCRIPTION HERE</h5>
        </div>
      </div>
      <div className="PrescriptForm">
        <div className="PrescriptForm__container">
          <div className="PrescriptForm__container__descrpt">
            <p>
              Please upload an image of your medical prescription issued by a
              SLMC registered doctor. Prescription drugs will only be issued if
              a valid prescription image is provided.
            </p>
          </div>
          <div className="PrescriptForm__container__uploader">
            <Uploader />
          </div>
        </div>
        <div className="PrescriptForm__container">
          <div className="PrescriptForm__container__form">
            <div className="PrescriptForm__container__form__field">
              <div className="PrescriptForm__container__form__field__title">
                Frequency
              </div>
              <Radio.Group onChange={handleFrequencyChange} value={frequency}>
                <Radio value={1}>One Time</Radio>
                <Radio value={2}>On Going</Radio>
              </Radio.Group>
            </div>
            <div className="PrescriptForm__container__form__field">
              <div className="PrescriptForm__container__form__field__title">
                Fulfillment
              </div>
              <Radio.Group onChange={handleFulfilChange} value={fulfil}>
                <Radio value={1}>Full</Radio>
                <Radio value={2}>Partial</Radio>
              </Radio.Group>
            </div>
            <div className="PrescriptForm__container__form__field">
              <div className="PrescriptForm__container__form__field__title">
                I am Okay to receive substitutes
              </div>
              <Radio.Group
                onChange={handleSubstituteChange}
                value={substitutes}
              >
                <Radio value={1}>Yes</Radio>
                <Radio value={2}>No</Radio>
              </Radio.Group>
            </div>
            <div className="PrescriptForm__container__form__field">
              <div className="PrescriptForm__container__form__field__title">
                Any additional notes
              </div>
              <textarea
                className="PrescriptForm__container__form__field__textarea"
                rows={5}
                placeholder="If you want to let us know anything, please write here..."
              ></textarea>
            </div>
          </div>
          <div className="PrescriptForm__container__button">
            <PrimaryButton btnContent={"SUBMIT"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptForm;
