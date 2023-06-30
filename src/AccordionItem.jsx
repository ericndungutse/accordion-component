import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function AccordionItem({ num, title, text }) {
  const [isOpen, setisOpen] = useState(false);

  function handleOpen() {
    setisOpen((currState) => !currState);
  }

  return (
    <div className={`item ${isOpen && `open`}`} onClick={handleOpen}>
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{(isOpen && `-`) || `+`}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
