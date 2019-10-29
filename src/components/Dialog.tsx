import React from 'react';

export interface DialogProps {
    dialogTitle: string,
    dialogMessage?: string,
    onClose: Function,
    onConfirm: Function
}

const Dialog = ({ dialogTitle, dialogMessage, onClose, onConfirm } : DialogProps) => {
    return (
        <div className="dialog__container">
            <div className="dialog animated zoomIn faster">
                <div className="dialog__title">{dialogTitle}</div>
                <div className="dialog__message">{dialogMessage}</div>
                <div className="dialog__controls">
                    <button className="btn secondary" onClick={() => onClose()}>Nope</button>
                    <button className="btn primary" onClick={() => onConfirm()}>Yeap</button>
                </div>
            </div>
        </div>
    );
}

export default Dialog;
