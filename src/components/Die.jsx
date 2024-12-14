export default function Die(prop) {
  return <button className={prop.isHeld ? "die-item held" : "die-item"} onClick={prop.hold}> {prop.number}</button>;
}
