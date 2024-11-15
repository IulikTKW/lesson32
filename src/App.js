import { useState } from "react";
import { ListItem, ToDoForm } from "./components";


function App() {
  const [toDo, setToDo] = useState('')
  const [toDoList, setToDoList] = useState([])

  const handleChangeToDo = (value) => {  
    setToDo(value)
  }

  const handleChangeListToDo = () => {
    setToDoList([...toDoList, {title: toDo, done: false}])
    handleChangeToDo('')
  }  

  return (
    <div>
      <ToDoForm
        title="Add to do"
        value={toDo}
        onChange={handleChangeToDo}
        btnTitle="Add to Do"
        btnAction={handleChangeListToDo}
      />
      <ul>
        {toDoList.map((listItem) => {
          return <ListItem key={listItem.title} title={listItem.title} done={listItem.done} />
        })}
      </ul>      
    </div>
  );
}

export default App;



// Adaugati iconitile pentru Edit si delete
// Adaugati ceva stiluri unde este cazul(List item)
// Implementati functionalul de delete (edit e exercitiu cu * :))
