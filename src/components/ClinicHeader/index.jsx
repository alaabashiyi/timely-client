import React from "react";
import { Link } from "react-router-dom";
import "./ClinicHeader.css";

export default function ClinicHeader(props) {
  const { data } = props;
  const { firstname, lastname, title, dsc, cal_data } = data;

  return (
    <div className="clinic_header">
      <div className="img_header">
        <img
          src="https://assets.entrepreneur.com/content/3x2/2000/1599168686-GettyImages-1270402636.jpg?width=500"
          alt="doc_img"
        />
      </div>
      <div className="dsc_header">
        <div className="title_header">
          <h1>
            {firstname} {lastname}
          </h1>
          <h2>{title}</h2>
        </div>
        <div className="doc_description">{dsc}</div>
      </div>
    </div>
  );
}
