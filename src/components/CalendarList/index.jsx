import React from "react";
import CalendarItem from "../CalendarItem";
import "./CalendarList.css";

export default function CalendarList(props) {
  const { data, day, selected, setSelected } = props;
  return (
    <div className="calendar_list">
      <div className="days_list">{day}</div>
      {data.map((data, index) => (
        <CalendarItem
          key={index}
          data={data}
          day={day}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
}
