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
            <div className={styles['btn-row']}>
                <button type='button'
                    className={`${styles['btn']} ${styles['add']}`}
                    disabled={!text}
                    onClick={e => handleKeyPress({ key: 'Enter' })}
                >
                    Add
                </button>
                <div className={`${styles['clear-btn-wrapper']}`}>
                    <button type='button'
                        className={`${styles['btn']} ${styles['clear']} ${text ? styles['visible'] : ''}`}
                        onClick={e => dispatch(handleTextChange(''))}
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Form;