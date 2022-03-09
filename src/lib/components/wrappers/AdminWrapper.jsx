import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "bootstrap/dist/css/bootstrap.css";

export default function AdminNavWrapper(props) {
  const [isSelected, setSelected] = useState(false);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: props.id });

  const style = {
    cursor: isDragging ? "move" : props.isEdit ? "auto" : "grab",
    opacity: isDragging ? 0.5 : 1,
    transform: CSS.Translate.toString(transform),
    transition
  };

  return (
    <div
      // onClick={() => {
      //   if (isSelected) {
      //     props.removeSelected(props.id);
      //   } else {
      //     props.addSelected(props.id);
      //   }
      //   setSelected(!isSelected);
      // }}
      ref={setNodeRef}
      style={{ ...style, ...props.style }}
      {...attributes}
      {...listeners}
      className={props.className + (isSelected ? " border border-info" : "")}
    >
      {props.children}
    </div>
  );
}
