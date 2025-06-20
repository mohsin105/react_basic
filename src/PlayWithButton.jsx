import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

const PlayWithButton=()=>{
    const [alertVisible,setAlertVisible]=useState(false);
    return(
        <>
            {alertVisible && (<Alert onClose={()=>setAlertVisible(false)}>You have clicked on the button</Alert>)}
            <Button handleClick={()=>setAlertVisible(true)}>Click on the Button</Button>
        </>
    );
};
export default PlayWithButton;