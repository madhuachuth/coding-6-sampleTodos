// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, onDeleteItem} = props
  const {id, title} = todoItem
  const onDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li className="list-item">
      <p className="para">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
