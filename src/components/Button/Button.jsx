import "./Button.css";
export default function Button({ children, onUserClicked, isActive }) {
  return (
    <button
      className={isActive ? "button active" : "button"}
      onClick={onUserClicked}
    >
      {children}
    </button>
  );
}
