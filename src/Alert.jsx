const Alert=({onClose,children})=>{

    return(
        <div>
            <span>{children}</span>
            <button className="m-5 px-3 py-2 border rounded-lg bg-red-500"
            onClick={onClose}>Close the alert</button>
        </div>
    );
};
export default Alert;