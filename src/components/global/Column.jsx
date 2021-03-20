import React from "react";
import { Droppable } from "react-beautiful-dnd";
import "../../stylesheets/components/global/column.scss"
import Subtask from "./Task/Subtask";
import Task from "./Task/Task"


function Column(props) {

  const { column, tasks } = props;

  return (
    // This is where the droppable region should be 
      <div className="container">

        <h1 className="heading"> {column.title} </h1>

        <Droppable droppableId={column.title}>
          {provided => (
            <div
              className = "column"
              innerRef={provided.innerRef}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {/* Pass the id, content(name), index, expanded state, checked state, and the json model to the task ui component */}
              {tasks.map((task, index) => <Task id={task.id} name={task.content} index={index} expanded={task.expanded} checked={task.checked} boardTask={task}/>)}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>

  );
}

export default Column;
