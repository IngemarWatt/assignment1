import React, { useState } from "react";
import { DragDropContext } from 'react-beautiful-dnd'
import Column from "../components/global/Column";
import "../stylesheets/boardView.scss"

function BoardView(props) {
  const { taskBoardData } = props;
  const [boardData, setBoardData] = useState(taskBoardData);

  const onDragEnd = result => {
    // TODO Implement
  }

  return (

    // Make this div the DragDropContext. Place the onDragEnd function in this file
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="row"> 
        {boardData.columnOrder.map((columnId) => {
          const column = boardData.columns[columnId];
          const tasks = column.taskIds.map(taskId => boardData.tasks[taskId]);

          return <Column heading={column.id}/>
        })}

        {/* <Column heading = "Backlog:"/>
        <Column heading = "In Progress:"/>
        <Column heading = "Todays Tasks:"/> */}
      </div>
    </DragDropContext>
  );
}

export default BoardView;
