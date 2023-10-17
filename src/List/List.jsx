import { useDispatch, useSelector } from 'react-redux';
import styles from './list.module.scss'
import { useEffect } from 'react';
import { fetchToDoAsync, todoSelector } from '../reduxSlices/todoSlice';
import { alertSelector } from '../reduxSlices/alertSlice';

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
                    <li key={index}>
                        {item.title}
                    </li>
                ))
            }
        </ul>
    </div>;
}

export default List;