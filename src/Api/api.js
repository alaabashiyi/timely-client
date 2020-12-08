const heroku = `https://timelyserver.herokuapp.com/`;
const local = `http://localhost:4000/`;

export const getDocList = async (setList) => {
  const listUrl = `${heroku}main/get-list`;
  try {
    const data = await fetch(listUrl);
    const list = await data.json();
    setList(list);
    // console.log(list);
  } catch (e) {
    console.log(e);
  }
};

export const getDocClinic = async (id, setClinic) => {
  const clinicUrl = `${heroku}doctor/${id}/doctor-clinic`;
  try {
    const data = await fetch(clinicUrl);
    const clinic = await data.json();
    setClinic(clinic);
    // console.log(list);
  } catch (e) {
    console.log(e);
  }
};

export const getProfile = async (id, setProfile) => {
  const profileUrl = `${heroku}client/${id}/client-profile`;
  try {
    const data = await fetch(profileUrl);
    const profile = await data.json();
    setProfile(profile);
    console.log(profile);
    localStorage.setItem("userprofile", JSON.stringify(profile));
  } catch (e) {
    console.log(e);
  }
};

export const setAppointmentApi = async (conf) => {
  const { docid, clientid, day, hour } = conf;

  const appointmentUrl = `${heroku}client/create-appointment/${docid}/${clientid}/${day}/${hour}`;
  try {
    const response = await fetch(appointmentUrl);
    const json = await response.json();

    if (json.status === 403) {
      alert(json.message);
    } else {
      alert("You have an appointment");
    }
  } catch (error) {
    console.log(error);
  }
};

export const createCalendarApi = async (id, days) => {
  const config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(days),
  };

  const calendarUrl = `${heroku}doctor/${id}/create-calendar`;
  try {
    const response = await fetch(calendarUrl);
    const json = await response.json();

    if (json.status === 201) {
      alert("Calendar Created");
    } else if (json.status === 301) {
      alert("You already created a calendar");
    }
  } catch (error) {
    console.log(error);
  }
};
