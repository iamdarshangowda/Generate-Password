import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState(
    JSON.parse(localStorage.getItem("pass")) || {
      password1: "",
      password2: "",
    }
  );
  const [passLength, setPassLength] = useState(6);
  const passwordOneRef = useRef(null);
  const passwordTwoRef = useRef(null);

  function handleLength(e) {
    setPassLength(e.target.value);
  }

  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function handleGenerate() {
    let p1 = "";
    let p2 = "";
    for (let i = 0; i <= passLength; i++) {
      let random1 = Math.floor(Math.random() * chars.length);
      let random2 = Math.floor(Math.random() * chars.length);
      p1 += chars.substring(random1, random1 + 1);
      p2 += chars.substring(random2, random2 + 1);
    }
    setPassword((prev) => ({
      ...prev,
      password1: p1,
      password2: p2,
    }));
    localStorage.setItem(
      "pass",
      JSON.stringify({ password1: p1, password2: p2 })
    );
  }

  function handleP1Copy() {
    navigator.clipboard.writeText(passwordOneRef.current.innerHTML);
    alert("Password copied");
  }

  function handleP2Copy() {
    navigator.clipboard.writeText(passwordTwoRef.current.innerHTML);
    alert("Password copied");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1 style={{ color: "#FFFFFF" }}>Generate a</h1>
        <h1 style={{ color: "#4ADF86" }}>random password</h1>
        <p>Never use an insecure password again.</p>
      </div>
      <div className="btn-container">
        <h3>Select Password Length:</h3>
        <div>
          <button className="btn" value="6" onClick={handleLength}>
            6
          </button>
          <button className="btn" value="10" onClick={handleLength}>
            10
          </button>
          <button className="btn" value="14" onClick={handleLength}>
            14
          </button>
        </div>
        <button className="btnGP" onClick={handleGenerate}>
          Generate Password
        </button>
      </div>
      <hr />
      <div className="password-container">
        <p onClick={handleP1Copy} ref={passwordOneRef}>
          {password.password1}
        </p>
        <p onClick={handleP2Copy} ref={passwordTwoRef}>
          {password.password2}
        </p>
      </div>
    </div>
  );
}

export default App;
