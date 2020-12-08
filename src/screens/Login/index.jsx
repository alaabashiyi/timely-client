import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [email, setEmail] = React.useState("");
  const [pass, setPassword] = React.useState("");
  const [check, setCheck] = React.useState(false);
  const [message, setMessage] = React.useState({});
  const { setLogin, setClientId } = props;
  const data = { email, pass };

  const heroku = `https://timelyserver.herokuapp.com/`;
  const local = `http://localhost:4000/`;
  function loginHandler() {
    fetch(`${heroku}${check ? "doctor" : "client"}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((results) => {
        setMessage(message);
        console.log(results);
        console.log(typeof results);

        if (results.auth) {
          setLogin(true, String(results.id), results.isDoc);
        }
      })
      .catch((error) => console.error(error.msg));
  }

  return (
    <div id="login-div">
      <h1 id="log-in-title">Log in</h1>

      <form>
        <div className="fields">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <div id="whoDiv">
            <input
              id="whoAmI"
              type="checkbox"
              onChange={(e) => setCheck(!check)}
            />
            <label htmlFor="whoAmI">I am a Doctor</label>
          </div>
        </div>
      </form>
      <button onClick={loginHandler}>Login</button>
      <br />
      <br />
      <Link to="/signup" id="register">
        Click Here To Register
      </Link>
      <h1 className={message.msg === "Welcome" ? "green" : "red"}>
        {message.msg ? message.msg : ""}
      </h1>
    </div>
  );
}
