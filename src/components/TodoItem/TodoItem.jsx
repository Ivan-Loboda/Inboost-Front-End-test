import { useDispatch } from 'react-redux';
import { getTodos} from "../../redux/todos/todosOperations";
import { deleteTodo } from "../../services/api/api";
import s from './TodoItem.module.scss'

const TodoItem = ({ title, description, id }) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        deleteTodo(id)
        dispatch(getTodos())
    }

    return (
        <li className={s.item_list}>
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={handleClick}>X</button>
        </li>
    )
}

export default TodoItem