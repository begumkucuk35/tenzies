export default function Die(prop) {
  return (
    <button
      className={prop.isHeld ? "die-item held" : "die-item"}
      onClick={prop.hold}
      aria-pressed={prop.isHeld}
      aria-label={`Die with value ${prop.number}, 
            ${prop.isHeld ? "held" : "not held"}`} //to increase accessibility 
    >
      {prop.number}
    </button>
  );
}
