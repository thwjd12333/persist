import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import { useState } from 'react'

const TodoView = () => {
  const [item, setItem] = useState([])
  const setTodoItem = text => {
    setItem(item.concat({ todo: text, id: item.length + 1, value: false }))
  }
  const setChecked = (todoIt, checkFlag) => {
    const targetTodo = item.filter(it => it === todoIt)
    targetTodo.value = checkFlag
  }
  return (
    <div>
      <p>TodoView</p>
      <hr />
      <TodoInput item={item} setItem={setTodoItem} />
      {item.map(todo => (
        <TodoItem todo={todo} key={todo.id} setChecked={setChecked} />
      ))}
    </div>
  )
}

export default TodoView
