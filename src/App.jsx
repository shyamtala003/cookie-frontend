import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import apiCall from "./hooks/apiCall";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = async () => {
    try {
      const data = await apiCall({
        url: "/",
        method: "post",
        data: { name: "John Doe" },
      });
      console.log(data);
    } catch (error) {
      // Error handling
    }
  };

  // Function to login
  const login = async () => {
    try {
      const data = await apiCall({ url: "/login" });
      console.log(data);
    } catch (error) {
      // Error handling
    }
  };

  // Call handleClick and login when the component mounts
  useEffect(() => {
    handleClick();
    login();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
