import logo from "/vite.svg";
import { useState } from "react";

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());
  setInterval(() => setCurrentTime(new Date()), 1000);
  return (
    <header>
      <h3>Result University</h3>
      <img src={logo} alt="logo" />
      <span>Date now: {currentTime.toLocaleTimeString()}</span>
    </header>
  );
}
