import React, { useState } from "react";
import Toitem from "./Toitem";
function Appe(){
const [input,setinput]=useState("");//input for using or calling setinput for changing the input
const [items,setitems]=useState([]);
function change(event){
    setinput(event.target.value);
}
function addItem(){
setitems((previtem)=>{
    return [...previtem,input];//spread operator adds all theelements ... and add the array that we have to add previous value and new value
});
setinput("");
}

function deleteitem(id){
setitems((previtem)=>{
return previtem.filter((item,index)=>{
return index!=id
})

});
}

    return (
<div className="fulldiv">
    <div className="screen-backdrop"></div>
<div className="headingdiv">
    <h1 >To-Do List</h1>
</div>

<div className="inputdiv">
    <input onChange={change}type="text" value={input}/>
    <button onClick={addItem} className="button" >
        <span>+</span>
    </button>
</div>

<div className="list">
    <ul>
      {items.map((todoitems,index)=>{return <Toitem key={index}id={index} text={todoitems}
      onchecked={deleteitem}
      />})}

    </ul>
</div>


</div>


    ); 
}

export default Appe;