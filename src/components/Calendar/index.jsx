import React, { useEffect, useState, useCallback } from "react";
import CalendarList from "../CalendarList";

export default function Calendar(props) {
  const [selected, setSelected] = useState(null);

  const { setAppointment, appointment } = props;
  const {
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    sutarday,
    id,
  } = props.data;
  // const days = Object.keys(props.data);
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "sutarday",
  ];

  const selectAppointment = () => {
    setAppointment(selected);
  };

  return (
    <div className="main_calendar_main">
      <div style={{ padding: 30 }}>
        <span>Hours</span>
      </div>

      <div className="main_calendar">
        {sunday && (
          <CalendarList
            setSelected={setSelected}
            selected={selected}
            data={sunday}
            day={days[0]}
          />
        )}
        {monday && (
          <CalendarList
            setSelected={setSelected}
            selected={selected}
            data={monday}
            day={days[1]}
          />
        )}
        {tuesday && (
          <CalendarList
            setSelected={setSelected}
            selected={selected}
            data={tuesday}
            day={days[2]}
          />
        )}
        {wednesday && (
          <CalendarList
            setSelected={setSelected}
            selected={selected}
            data={wednesday}
            day={days[3]}
          />
        )}
        {thursday && (
          <CalendarList
            setSelected={setSelected}
            selected={selected}
            data={thursday}
            day={days[4]}
          />
        )}
        {friday && (
          <CalendarList
            setSelected={setSelected}
            selected={selected}
            data={friday}
            day={days[5]}
          />
        )}
        {sutarday && (
          <CalendarList
            setSelected={setSelected}
            selected={selected}
            data={sutarday}
            day={days[6]}
          />
        )}
      </div>
      <div>
        <button onClick={selectAppointment} style={{ margin: "10px" }}>
          Create Appointment
        </button>
      </div>
    </div>
  );
}
