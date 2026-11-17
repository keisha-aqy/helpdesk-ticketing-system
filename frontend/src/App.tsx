import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [apiStatus, setApiStatus] = useState("Checking...");

  useEffect(() => {
    fetch("/api/health")
      .then((response) => response.json())
      .then((data) => setApiStatus(data.message))
      .catch(() => setApiStatus("Backend belum terhubung"));
  }, []);

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Helpdesk Ticketing System</h1>
      <p>Welcome to Helpdesk Dashboard</p>

      <h3>Backend Connection</h3>
      <p>{apiStatus}</p>
    </main>
  );
}

export default App;
