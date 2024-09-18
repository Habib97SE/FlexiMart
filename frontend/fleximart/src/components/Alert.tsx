const Alert = ({ message, mressageStatus }) => {
    switch (messageStatus) {
        case "DANGER":
            return (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline">{message}</span>
                </div>
            );
        case "SUCCESS":
            return (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Success!</strong>
                    <span className="block sm:inline">{message}</span>
                </div>
            );
        default:
            return null;
    }
}

export default Alert;