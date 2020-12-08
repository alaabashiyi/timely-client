import React from "react";
import { Link } from "react-router-dom";
import "./ClinicItem.css";

export default function ClinicItem(props) {
  const { data } = props;

  const { firstname, lastname, imgUrl, id, title } = data;

  return (
    <div className="clinic_item">
      <div className="doc_img_item">
        <img
          src="https://assets.entrepreneur.com/content/3x2/2000/1599168686-GettyImages-1270402636.jpg?width=200"
          alt="docimg"
        />
      </div>
      <div className="doc_name_item">
        <Link to={`/clinic/${id}/${firstname}-${lastname}/${title}`}>
          <h2>
            {firstname} {lastname}
          </h2>
        </Link>
      </div>
    </div>
  );
}
