const Button=({handleClick,children})=>{
    return(
        <div>
            <button className="m-5 px-3 py-2 bg-cyan-500" 
            onClick={handleClick}>{children}</button>
        </div>
    );
};
export default Button;