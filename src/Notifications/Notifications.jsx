import { alertSelector } from "../reduxSlices/alertSlice";
import { useSelector } from "react-redux";
import { toastTimeout } from "../constants";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { memo, useRef } from "react";

const Notifications = () => {

    const { fetchToDosStatus, addToDoStatus } = useSelector(alertSelector)

    const toastId = useRef(null);

    if (fetchToDosStatus === 'loading' && toastId.current !== 'fetchToDosStatus:loading') {
        toast.loading('Fetching todos', { autoClose: toastTimeout })
        toastId.current = 'fetchToDosStatus:loading'
    }
    if (addToDoStatus === 'loading' && toastId.current !== 'addToDoStatus:loading') {
        toastId.current = toast.loading('Adding todos')
        toastId.current = 'addToDoStatus:loading'

    }

    if (fetchToDosStatus === 'completed') {
        toast.dismiss();
        toastId.current = null
        toastId.current = toast.success('Fetched todos')
    }
    if (addToDoStatus === 'completed') {
        toast.dismiss();
        toastId.current = null
        toastId.current = toast.success('Added todo')
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