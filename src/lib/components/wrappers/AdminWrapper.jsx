import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "bootstrap/dist/css/bootstrap.css";

export default function AdminNavWrapper(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: props.id });

  const style = {
    position: props.makeSticky? "sticky" : "",
    top: props.makeSticky? `${props.offsetY+1.5}em` : "",
    zIndex: props.makeSticky ? 15 : "",
    cursor: isDragging ? "move" : props.isEditMode ? "move" : "auto",
    opacity: isDragging|| props.isSelected ? 0.5 : 1,
    transform: CSS.Translate.toString(transform),
    transition
  };

  return (
    <div
      
      ref={setNodeRef}
      style={{ ...style, ...props.style}}
      {...attributes}
      {...listeners}
      className={props.className + (props.isSelected ? " border border-primary" : "")}
    >
      {/* <span>Sticky {JSON.stringify(props.makeSticky)}</span> */}
      {props.children}
    </div>
  );
}
