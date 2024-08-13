import React, { createContext, useState, useContext } from "react";
import Tooltip from "../components/common/Tooltip";

const TooltipContext = createContext();

export const TooltipProvider = ({ children }) => {
    const [tooltipMessage, setTooltipMessage] = useState("");
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [isError, setIsError] = useState(false); // Added for error handling

    const showTooltip = (message, error = false) => {
        setTooltipMessage(message);
        setIsError(error); // Set error flag
        setTooltipVisible(true);
    };

    const hideTooltip = () => {
        setTooltipVisible(false);
    };

    return (
        <TooltipContext.Provider value={{ showTooltip, hideTooltip }}>
            {children}
            <Tooltip
                message={tooltipMessage}
                visible={tooltipVisible}
                error={isError}
                onClose={hideTooltip} // Pass close handler
            />
        </TooltipContext.Provider>
    );
};

export const useTooltip = () => useContext(TooltipContext);
