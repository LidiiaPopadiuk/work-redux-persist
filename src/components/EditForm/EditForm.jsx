import y from './EditForm.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTodo } from 'redux/todos/todosOperation'

export const EditForm = ({ data, close }) => {
    const [inputValue, setInputValue] = useState(data.text)
    const dispatch = useDispatch()

    const onChangeHandler = (e) => {
        e.preventDefault()
        const updatedTodo = { ...data, text: inputValue }
        dispatch(updateTodo(updatedTodo))
        close()
    }

    return (
        <div className={y.backdrop}>
            <div className={y.modal}>
                <form onSubmit={onChangeHandler}>
                    <button onClick={close}>X</button>
                    <label>
                        <input onChange={(e) => setInputValue(e.target.value)} type="text" value={inputValue} />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}