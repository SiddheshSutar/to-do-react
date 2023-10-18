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
                placeholder="What's on your mind today ?"
                onChange={e => {
                    dispatch(handleTextChange(e.target.value))
                }}
                onKeyDown={handleKeyPress}
            />
            <div>
                <button type='button'
                    className={styles['btn']}
                    disabled={!text}
                    onClick={e => handleKeyPress({ key: 'Enter' })}
                >
                    Add
                </button>
                {text && <button type='button'
                    className={styles['btn']}
                    onClick={e => dispatch(handleTextChange(''))}
                >
                    Clear
                </button>}
            </div>
        </div>
    );
}

export default Form;