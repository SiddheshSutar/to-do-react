import { useDispatch, useSelector } from 'react-redux';
import styles from './list.module.scss'
import { useEffect } from 'react';
import { deleteToDoAsync, fetchToDoAsync, todoSelector, updateToDoAsync } from '../reduxSlices/todoSlice';
import { alertSelector } from '../reduxSlices/alertSlice';
import { removeToDo } from '../reduxSlices/todoSlice';

const List = () => {

    const { todos } = useSelector(todoSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchToDoAsync())
    }, [])

    return <div className={styles['container']}>

        <ul>
            {
                todos.length > 0 &&
                <>
                    <div>
                        <h2>
                            Your todos
                        </h2>
                    </div>
                    {
                        todos.map((item, index) => (
                            <li key={index}>
                                <div className={styles['item-row']}>
                                    <div className={`${styles['item-col']} ${styles['title']}`}
                                        style={{
                                            textDecoration: item.completed ? 'line-through' : 'none'
                                        }}
                                    >
                                        {item.title}
                                    </div>
                                    <div className={`${styles['item-col']} ${styles['right-col']}`}>
                                        <div className={`${styles['icon']} ${styles['toggle-icon']}`}
                                            title={item.completed ? 'Mark as incomplete' : 'Mark as completed'}
                                            onClick={e => {
                                                dispatch(updateToDoAsync({
                                                    ...item,
                                                    completed: !item.completed
                                                }))
                                            }}
                                        >
                                            Toggle
                                        </div>
                                        <div className={`${styles['icon']} ${styles['remove-icon']}`}
                                            title="Remove to do"
                                            onClick={e => dispatch(deleteToDoAsync(item))}
                                        >
                                            <div className={`${styles['symbol']}`}>+</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </>
            }
        </ul>
    </div>;
}

export default List;