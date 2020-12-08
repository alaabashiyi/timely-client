import React, { useEffect, useState } from "react";
import Calendar from "../../components/Calendar";
import ClinicHeader from "../../components/ClinicHeader";
import NoClinic from "../../components/NoClinic";
import CreateCalendar from "../../components/CreateCalendar";

import { getDocClinic, setAppointmentApi } from "../../Api/api";

export default function Clinic(props) {
  const [clinic, setClinic] = useState(null);
  const [appointment, setAppointments] = useState(null);
  const [calendarCreated, setCalendarCreated] = useState(false);

  const {
    match: {
      params: { id, docname, title },
    },
    clientId,
  } = props;

  const setAppointment = (data) => {
    const day = data.split("_")[0];
    const hour = data.split("_")[1];
    setAppointments(data);
    const config = { day, hour, docid: id, clientid: clientId };
    // console.log(config);
    setAppointmentApi(config);
  };

  useEffect(() => {
    getDocClinic(id, setClinic);
  }, [setAppointments, appointment, calendarCreated]);

  if (!clinic)
    return <CreateCalendar setCalendarCreated={setCalendarCreated} />;

  return (
    <div>
      <ClinicHeader data={clinic} />

      <Calendar
        data={{ ...clinic.cal_data, id }}
        setAppointment={setAppointment}
        appointment={appointment}
      />
    </div>
  );
}
