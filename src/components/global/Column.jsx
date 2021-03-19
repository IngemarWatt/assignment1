import React from "react";
import { Droppable } from "react-beautiful-dnd";
import "../../stylesheets/components/global/column.scss"
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
              {tasks.map((task, index) => <Task id={task.id} name={task.content} index={index}/>)}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        
        {/* <div className = "column">

          <Task name = "Assignment 1"/>
          <Task name = "Task 1"/>
          <Task name = "Task 2"/>
          <Task name = "Assignment 2"/>
          <Task name = "Task 1" />
          <Task name = "Task 2"/>
          <Task name = "Task 3"/>
          
        </div> */}
      </div>

  );
}

export default Column;
