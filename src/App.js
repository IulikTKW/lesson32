import { useState } from "react";
import { ListItem, Modal, ToDoForm } from "./components";


function App() {
  const [toDo, setToDo] = useState('')
  const [toDoList, setToDoList] = useState([])
  const [editToDo, setEditToDo] = useState('')
  const [newToDo, setNewToDo] = useState('')

  const handleChangeListToDo = () => {
    if (!toDo) return alert('To do should not be empty')
    if (toDoList.some(item => item.title === toDo)) return alert('To do title should be uniq')

    setToDoList([...toDoList, { title: toDo, done: false }])
    setToDo('')
  }

  const handleEditToDo = () => {
    if (!newToDo) return alert('To do should not be empty')
    if (toDoList.some(item => item.title === newToDo)) return alert('To do title should be uniq')

    setToDoList((list) => {
      return list.map((item) => {
        return { ...item, title: item.title === editToDo ? newToDo : item.title }
      })
    })
    setEditToDo('')
    setNewToDo('')
  }

  return (
    <div>
      <ToDoForm
        title="Add to do"
        value={toDo}
        onChange={setToDo}
        btnTitle="Add to Do"
        btnAction={handleChangeListToDo}
      />
      <ul>
        {toDoList.map((listItem) => {
          return <ListItem
            key={listItem.title}
            title={listItem.title}
            done={listItem.done}
            editAction={() => {
              setEditToDo(listItem.title)
              setNewToDo(listItem.title)
            }}
          />
        })}
      </ul>
      <Modal isOpen={editToDo} closeModal={setEditToDo}>
        <ToDoForm
          title="Edit to do"
          value={newToDo}
          onChange={setNewToDo}
          btnTitle="Edit to Do"
          btnAction={handleEditToDo}
          placeholder="New title"
        />
      </Modal>
    </div>
  );
}

export default App;
