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

  const handleDelete = (toDoTitle) => { 
    setToDoList((list) => {
      return list.filter(item => item.title !== toDoTitle)
    })
  }

  const handleToggleToDo = (toDoTitle) => {
    setToDoList((list) => {
      return list.map((item) => {
        return { ...item, done: item.title === toDoTitle ? !item.done : item.done}
      })
    })    
  }

  const doneToDoList = toDoList.filter((item) => item.done)
  .map(({title, done}) => {
    return <ListItem
      key={title}
      title={title}
      done={done}
      itemAction={() => {
        handleToggleToDo(title)
      }}
      editAction={() => {
        setEditToDo(title)
        setNewToDo(title)
      }}
      deleteAction={() =>{
        handleDelete(title)
      }}
    />
  })

  const unDoneToDoList = toDoList.filter((item) => !item.done)
  .map(({title, done}) => {
    return <ListItem
      key={title}
      title={title}
      done={done}
      itemAction={() => {
        handleToggleToDo(title)
      }}
      editAction={() => {
        setEditToDo(title)
        setNewToDo(title)
      }}
      deleteAction={() =>{
        handleDelete(title)
      }}
    />
  })

  return (
    <div>
      <ToDoForm
        title="Add to do"
        value={toDo}
        onChange={setToDo}
        btnTitle="Add to Do"
        btnType="primary"
        btnAction={handleChangeListToDo}
        clear={() => setToDo('')}
      />
      <p>Done:</p>
      <ul>
        {doneToDoList}      
      </ul>
      <p>Undone:</p>
      <ul>
        {unDoneToDoList}      
      </ul>
      <Modal isOpen={editToDo} closeModal={setEditToDo}>
        <ToDoForm
          title="Edit to do"
          value={newToDo}
          onChange={setNewToDo}
          btnTitle="Edit to Do"
          btnAction={handleEditToDo}
          btnType="secondary"
          placeholder="New title"
          clear={() => setNewToDo('')}
        />
      </Modal>

    </div>
  );
}

export default App;


// adaugati 2 liste una cu done si una cu undone 
// adaugati cateva tipuri pentru button