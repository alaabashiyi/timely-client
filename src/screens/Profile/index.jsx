import React, { useEffect } from "react";
import "./Profile.css";

export default function Profile(props) {
  const [userProfile, setUserProfile] = React.useState(null);

  function getlocalprofile() {
    const localProfile = JSON.parse(localStorage.getItem("userprofile"));
    setUserProfile(localProfile);
  }
  // const { firstname, lastname, email, imgUrl, title, dsc } = userProfile;

  console.log("im in the profile", userProfile);

  useEffect(() => {
    getlocalprofile();
  }, []);

  if (!userProfile) return <div>loading..</div>;

  return (
    <div className="profile">
      <div className="left-info">
        <img src={userProfile.imgUrl} id="profile-img" alt="profilepic"></img>
        <h2>First Name: {userProfile.firstname}</h2>
        <h2>Last Name: {userProfile.lastname}</h2>
        <h2>Email: {userProfile.email}</h2>
      </div>
      {userProfile.title && userProfile.dsc && (
        <div className="info2">
          <p>
            <h2>Title</h2>
            {userProfile.title}
          </p>
          <p>
            <h2>About</h2>
            {userProfile.dsc}
          </p>
        </div>
      )}
    </div>
  );
}
