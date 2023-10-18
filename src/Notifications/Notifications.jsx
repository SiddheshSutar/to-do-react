import { alertSelector, reset } from "../reduxSlices/alertSlice";
import { useDispatch, useSelector } from "react-redux";
import { toastTimeout } from "../constants";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { memo, useRef } from "react";

const Notifications = () => {

    const { fetchToDosStatus, addToDoStatus, deleteToDoStatus } = useSelector(alertSelector)

    const toastId = useRef(null);
    const dispatch = useDispatch();

    if (fetchToDosStatus === 'loading' && toastId.current !== 'fetchToDosStatus:loading') {
        toast.loading('Fetching todos', { autoClose: toastTimeout })
        toastId.current = 'fetchToDosStatus:loading'
    }
    if (addToDoStatus === 'loading' && toastId.current !== 'addToDoStatus:loading') {
        toastId.current = toast.loading('Adding todos')
        toastId.current = 'addToDoStatus:loading'
    }
    if (deleteToDoStatus === 'loading' && toastId.current !== 'deleteToDoStatus:loading') {
        toastId.current = toast.loading('Adding todos')
        toastId.current = 'deleteToDoStatus:loading'
    }

    if (fetchToDosStatus === 'completed') {
        toast.dismiss();
        toastId.current = null
        toastId.current = toast.success('Fetched todos')
        setTimeout(() => {
            dispatch(reset('fetchToDosStatus'))
        }, toastTimeout);
    }
    if (addToDoStatus === 'completed') {
        toast.dismiss();
        toastId.current = null
        toastId.current = toast.success('Added todo')
        setTimeout(() => {
            dispatch(reset('addToDoStatus'))
        }, toastTimeout);
    }
    if (deleteToDoStatus === 'completed') {
        toast.dismiss();
        toastId.current = null
        toastId.current = toast.success('Deleted todo')
        setTimeout(() => {
            dispatch(reset('deleteToDoStatus'))
        }, toastTimeout);
    }

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={toastTimeout}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
}

export default memo(Notifications);