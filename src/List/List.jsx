import { useDispatch, useSelector } from 'react-redux';
import styles from './list.module.scss'
import { removeToDo } from '../reduxSlices/todoSlice';

const List = () => {

    const todos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch()

    return (
        <div className={styles['container']}>
            <ul>

            {
                todos.map((item, index) => (
                    <li key = {index}>
                        <div className={styles['item-row']}>
                            <div className={styles['item-col']}>
                                {item}
                            </div>
                            <div className={`${styles['item-col']} ${styles['remove-icon']}`}
                                onClick={e => dispatch(removeToDo(index))}
                            >
                                &#x2613;
                            </div>
                        </div>
                    </li>
                ))
            }
            </ul>
        </div>
    );
}
 
export default List;