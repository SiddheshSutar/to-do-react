import { useDispatch, useSelector } from 'react-redux';
import styles from './list.module.scss'

const List = () => {

    const todos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch()

    return (
        <div className={styles['container']}>
            <ul>

            {
                todos.map((item, index) => (
                    <li key = {index}>
                        {item}
                    </li>
                ))
            }
            </ul>
        </div>
    );
}
 
export default List;