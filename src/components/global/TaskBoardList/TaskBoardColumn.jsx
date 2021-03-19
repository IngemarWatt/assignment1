import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from '../Task/Task';

function TaskBoardColumn(props) {
    return(
        <div className="task-board-column">
            <label className="task-board-header-label">{props.column.title}</label>
            <Droppable droppableId={props.column.title}>
                {provided => (
                    <div
                        innerRef={provided.innerRef}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {props.tasks.map((task, index) => <Task id={task.id} name={task.content} index={index}/>)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}

export default TaskBoardColumn