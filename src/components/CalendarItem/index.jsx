import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CalendarItem.css";

export default function CalendarItem(props) {
  const { day, selected, setSelected } = props;
  const { hour, istaken, takenby } = props.data;
  const isSelected = `${day}_${hour}`;
  const handleSelect = () => {
    setSelected(`${day}_${hour}`);
  };
  return (
    <>
      {istaken ? (
        <div className={`calendar_item_taken`}>
          <span>Taken</span>
        </div>
      ) : (
        <div
          onClick={handleSelect}
          className={`calendar_item ${
            selected === isSelected ? "is_selected" : ""
          }`}
        >
          <span>{hour}:00</span>
        </div>
      )}
    </>
  );
}
