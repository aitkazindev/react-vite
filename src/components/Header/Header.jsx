import logo from "/vite.svg";
import { useState } from "react";
import { styled } from "styled-components";
import "./Header.css";

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;
export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());
  setInterval(() => setCurrentTime(new Date()), 1000);
  return (
    <HeaderContainer>
      <h3>Result University</h3>
      <img src={logo} alt="logo" />
      <span>Date now: {currentTime.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
