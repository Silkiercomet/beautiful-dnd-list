import { Droppable, Draggable } from "react-beautiful-dnd";
const ListItems = ({ tasks }) => {
  return (
    <Droppable droppableId="tasks">
      {(droppableProvided) => (
        <ul
          {...droppableProvided.droppableProps}
          ref={droppableProvided.innerRef}
          className="task-container"
        >
          {tasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id} index={index}>
              {(draggableProvided) => (
                <li
                  {...draggableProvided.draggableProps}
                  ref={draggableProvided.innerRef}
                  {...draggableProvided.dragHandleProps}
                  className="task-item"
                >
                  {task.text}
                </li>
              )}
            </Draggable>
          ))}
          {droppableProvided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default ListItems;
