import React, { useState } from "react";
import { DragDropContext } from 'react-beautiful-dnd'
import Column from "../components/global/Column";
import "../stylesheets/boardView.scss"

function BoardView(props) {
  const { taskBoardData } = props;
  const [boardData, setBoardData] = useState(taskBoardData);

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
        return;
    }

    // If it's dropped in the same place do nothing
    if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
    ) {
        return;
    }

    const start = boardData.columns[source.droppableId];
    const finish = boardData.columns[destination.droppableId];

    if(start === finish){
        // Dragged within one column
        const newTaskIds = Array.from(start.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
        
        const newColumn = {
            ...start,
            taskIds: newTaskIds,
        };
    
        console.log(start)
        console.log(newColumn)

        const newBoardData = boardData

        newBoardData.columns[source.droppableId] = newColumn;
    
        setBoardData({...newBoardData})
        console.log("Board data set")
        console.log(newBoardData)

        return;
    }

    // Start column different to destination
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
        ...start,
        taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
    };

    const newBoardData = boardData

    newBoardData.columns[source.droppableId] = newStart;
    newBoardData.columns[destination.droppableId] = newFinish;
    setBoardData({...newBoardData})
 }

  return (

    // Make this div the DragDropContext. Place the onDragEnd function in this file
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="row"> 
        {boardData.columnOrder.map((columnId) => {
          const column = boardData.columns[columnId];
          const tasks = column.taskIds.map(taskId => boardData.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks}/>
        })}
      </div>
    </DragDropContext>
  );
}

export default BoardView;
