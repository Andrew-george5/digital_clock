function Digit({ className, value }) {
  const topIsOn =
    value === 0 ||
    value === 2 ||
    value === 3 ||
    value === 5 ||
    value === 6 ||
    value === 7 ||
    value === 8 ||
    value === 9;
  const topRIsOn =
    value === 0 ||
    value === 1 ||
    value === 2 ||
    value === 3 ||
    value === 4 ||
    value === 7 ||
    value === 8 ||
    value === 9;
  const topLIsOn =
    value === 0 ||
    value === 4 ||
    value === 5 ||
    value === 6 ||
    value === 8 ||
    value === 9;
  const bottomIsOn =
    value === 0 ||
    value === 2 ||
    value === 3 ||
    value === 5 ||
    value === 6 ||
    value === 8 ||
    value === 9;
  const bottomRIsOn =
    value === 0 ||
    value === 1 ||
    value === 3 ||
    value === 4 ||
    value === 5 ||
    value === 6 ||
    value === 7 ||
    value === 8 ||
    value === 9;
  const bottomLIsOn = value === 0 || value === 2 || value === 6 || value === 8;
  const midIsOn =
    value === 2 ||
    value === 3 ||
    value === 4 ||
    value === 5 ||
    value === 6 ||
    value === 8 ||
    value === 9;

  return (
    <div className={className}>
      <div className={`top ${topIsOn ? "bg-white" : ""}`}></div>
      <div className={`mid ${midIsOn ? "bg-white" : ""}`}></div>
      <div className={`topL ${topLIsOn ? "bg-white" : ""}`}></div>
      <div className={`topR ${topRIsOn ? "bg-white" : ""}`}></div>
      <div className={`bottomL ${bottomLIsOn ? "bg-white" : ""}`}></div>
      <div className={`bottomR ${bottomRIsOn ? "bg-white" : ""}`}></div>
      <div className={`bottom ${bottomIsOn ? "bg-white" : ""}`}></div>
    </div>
  );
}

export default Digit;
