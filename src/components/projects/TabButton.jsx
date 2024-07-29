import classes from "./TabButton.module.css";

function TabButton({ children, onSelect, isSelected }) {
  return (
    <button
      onClick={onSelect}
      className={`${classes.btn} ${isSelected && classes.active}`}
    >
      {children}
    </button>
  );
}

export default TabButton;
