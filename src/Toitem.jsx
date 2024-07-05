import React,{useState} from "react";

function Toitem(props){

    
    const [isdone,setisdone]=useState(false);

    function handle(){
        setisdone((prevValue)=>{
             return !prevValue;
        })
    }
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
        <div  style={{ display: "flex", alignItems: "center" }}>
        <li  style={{textDecoration: isdone ? "line-through":"none"}} >{props.text}</li>

        <button onClick={handle}className="deleti">🗸</button>


        <button onClick={()=>{
            props.onchecked(props.id);
        }}className="delete">×</button>
           
           
        </div>
        </div>
    );
}
export default Toitem;