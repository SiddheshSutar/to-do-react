import styles from './form.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { handleTextChange, addToDo, todoSelector, addToDoAsync } from '../reduxSlices/todoSlice'

const Form = () => {

    const { text } = useSelector(todoSelector)
    const dispatch = useDispatch()

    const handleKeyPress = e => {
        if (!text) return

        if (e.key === 'Enter') {
            dispatch(addToDoAsync({
                title: text,
                completed: false
            }))

        }
    }

    return (
        <div className={styles['container']}>
            <input
                value={text}
                onChange={e => {
                    dispatch(handleTextChange(e.target.value))
                }}
                onKeyDown={handleKeyPress}
            />
        </div>
    );
}

export default Form;