import React, { useEffect } from 'react';

export interface SnackbarProps {
    message: string,
    onClose: Function
}

const Snackbar = ({ message, onClose }: SnackbarProps) => {
    useEffect(() => {
        setTimeout(() => {
            onClose()
        }, 7000)
    }, [onClose])

    return (
        <div className="snackbar__container">
            <div className="snackbar animated slideInDown fast" onClick={() => onClose()}>
                <div>{message}</div>
            </div>
        </div>
    );
}

export default Snackbar;
