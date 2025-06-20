const FirstComponent=({name})=>{
    
    return(
        <>
            <h2>My first react component</h2>
            {name && (<p>Hello jamal</p>)}
        </>
    );
};

export default FirstComponent;