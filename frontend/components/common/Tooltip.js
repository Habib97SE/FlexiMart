import React, { useState, useEffect } from "react";

const Tooltip = ({ message, visible, error, onClose }) => {
    const [show, setShow] = useState(visible);

    useEffect(() => {
        if (visible) {
            setShow(true);
            const timer = setTimeout(() => {
                setShow(false);
            }, 3000); // Tooltip disappears automatically after 3 seconds
            return () => clearTimeout(timer);
        }
    }, [visible]);

    const handleClose = () => {
        setShow(false);
        if (onClose) onClose();
    };

    if (!show) return null;

    return (
        <div
            className={`tooltip-container ${
                error ? "text-danger" : "text-success"
            }`}
        >
            <button
                className="tooltip-close"
                onClick={handleClose}
                aria-label="Close"
            >
                &times;
            </button>
            {message}
        </div>
    );
};

export default Tooltip;
