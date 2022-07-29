import { useEffect, useState, useRef } from "react";
import { useDispatch } from 'react-redux';
import { getTodos} from "../../redux/todos/todosOperations";
import { addNewTodo, updateTodo } from '../../services/api/api'
import s from './TodoForm.module.scss'

const TodoForm = () => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        id: ""
    })
    const [newTodo, setNewTodo] = useState(null)
    const [selectValue, setSelectValue] = useState("ADD")

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setNewTodo({ ...formData });
        reset()
    }

    const handleSelectChange =(e) => {
        setSelectValue(e.target.value)
    }

    useEffect(() => {
        if (!newTodo) return;

        if(selectValue === "ADD") {
            addNewTodo(newTodo);
            dispatch(getTodos());
        } else if(selectValue === "UPDATE") {
            updateTodo(newTodo);
            dispatch(getTodos());
        }
        
    }, [newTodo])

    const reset =() => setFormData({
        title: "",
        description: "",
        id: ""
    })

    return (
        <div className={s.container}>
            <select onChange={handleSelectChange}>
                <option value="ADD">ADD</option>
                <option value="UPDATE">UPDATE</option>
            </select>

            <form onSubmit={handleSubmit} className={s.submit_form}>
                <input
                    name="title"
                    onChange={handleChange}
                    value={formData.title}
                    required
                />
                <input
                    name="description"
                    onChange={handleChange}
                    value={formData.description}
                    required
                />

                {selectValue === "UPDATE" && (
                    <input
                        name="id"
                        onChange={handleChange}
                        value={formData.id}
                        required
                    />
                )}
                <button >SUBMIT</button>
            </form>
        </ div>
    )
}

export default TodoForm