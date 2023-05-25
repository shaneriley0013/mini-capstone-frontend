import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");

  let nameLengthMessage;
  if (name.length > 20) {
    nameLengthMessage = <small id="bad">Your name is too long make it shorter</small>
  } else {
    nameLengthMessage = <small>{20 - name.length} characters remaining</small>
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
        Name: <input name="name" type="text" value={name} onChange={(event) => {setName(event.target.value)}} />
        {nameLengthMessage}
        </div>
        <br />
        <div>
          Email: <input name="email" type="email" />
        </div>
        <br />
        <div>
          Password: <input name="password" type="password" />
        </div>
        <br />
        <div>
          Password confirmation: <input name="password_confirmation" type="password" />
        </div>
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}