import { useDispatch, useSelector } from 'react-redux';
import styles from './list.module.scss'
import { useEffect, useState } from 'react';
import { deleteToDoAsync, fetchToDoAsync, todoSelector, updateToDoAsync } from '../reduxSlices/todoSlice';
import { alertSelector } from '../reduxSlices/alertSlice';
import { removeToDo } from '../reduxSlices/todoSlice';

const List = () => {

    const { todos } = useSelector(todoSelector)
    const dispatch = useDispatch()
    const [hoveredItemIndex, setHoveredItemIndex]  = useState(null)

    useEffect(() => {
        dispatch(fetchToDoAsync())
    }, [])
    
    const handleToggleButtonHover = hoveredIndex => {
        setHoveredItemIndex(hoveredIndex)
    }

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
                                            onMouseOver={e => {handleToggleButtonHover(index)}}
                                            onMouseOut={e => {handleToggleButtonHover(null)}}
                                            onClick={e => {
                                                dispatch(updateToDoAsync({
                                                    ...item,
                                                    completed: !item.completed
                                                }))
                                            }}
                                        >
                                            <div className={`${styles['toggle-text']}`}>
                                                {`${
                                                    hoveredItemIndex === index ?
                                                    item.completed ? 'Mark as incomplete' : 'Mark as completed' :
                                                    'Toggle'
                                                }`}
                                            </div>
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