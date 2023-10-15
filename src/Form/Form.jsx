import styles from './form.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { handleTextChange, addToDo } from '../reduxSlices/todoSlice'

const Form = () => {

    const text = useSelector((state) => state.todo.text)
    const dispatch = useDispatch()

    const handleKeyPress = e => {
        if(!text) return
        
        if (e.key === 'Enter') {
            dispatch(addToDo())

        }
    }

    return (
        <div className={styles['container']}>
            <input
                value={text}
                onChange={e => {
                    dispatch(handleTextChange(e.target.value))
                }}
                onKeyPress={handleKeyPress}
            />
        </div>
    );
}

export default Form;