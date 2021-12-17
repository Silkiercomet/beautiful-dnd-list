import "./styles.css";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import ListItems from "./ListItems";

import { Droppable, Draggable } from "react-beautiful-dnd";

const initialTasks = [
  {
    id: "1",
    text: "React.js"
  },
  {
    id: "2",
    text: "HTML/CSS"
  },
  {
    id: "3",
    text: "AWS"
  },
  {
    id: "4",
    text: "JavaScript"
  }
];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { source, destination } = result;
        if (!destination) {
          return;
        }
        if (
          source.index === destination.index &&
          source.droppableId === destination.droppableId
        ) {
          return;
        }

        setTasks((prevTasks) =>
          reorder(prevTasks, source.index, destination.index)
        );
      }}
    >
      <div className="app">
        <h1>Estudiar</h1>
        <ListItems tasks={tasks} />
      </div>
    </DragDropContext>
  );
}

export default App;
