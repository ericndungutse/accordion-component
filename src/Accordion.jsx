import { AccordionItem } from "./AccordionItem";

// eslint-disable-next-line react/prop-types
export function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((datum, index) => (
        <AccordionItem
          key={index}
          title={datum.title}
          num={index}
          text={datum.text}
        />
      ))}
    </div>
  );
}
