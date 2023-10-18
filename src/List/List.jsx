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
                todos.map((item, index) => (
                    <li key = {index}>
                        <div className={styles['item-row']}>
                            <div className={`${styles['item-col']} ${styles['title']}`}
                                style={{
                                    textDecoration: item.completed ? 'line-through' : 'none'
                                }}
                                onClick={e => {
                                    dispatch(updateToDoAsync({
                                        ...item,
                                        completed: !item.completed
                                    }))
                                }}
                            >
                                {item.title}
                            </div>
                            <div className={`${styles['item-col']} ${styles['remove-icon']}`}
                                // onClick={e => dispatch(removeToDo(item))}
                                onClick={e => dispatch(deleteToDoAsync(item))}
                            >
                                &#x2613;
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>;
}

export default List;