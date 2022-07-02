import "./App.css";

function App() {
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
          <button className="btn">6</button>
          <button className="btn">10</button>
          <button className="btn">14</button>
        </div>
        <button className="btnGP">Generate Password</button>
      </div>
      <hr />
      <div className="password-container">
        <p>password 1</p>
        <p>password 2</p>
      </div>
    </div>
  );
}

export default App;
