import '../App.css';
import React, { useEffect, useState } from 'react';


const Entries = ()=>{

  // 1.2: Stores inital textbox entry
const [entry,setEntry]=useState({inputText:""})// Remember to add an additional key value pair for 'completed'

// 2.2: Adds textbox entry to the 'list' hook
const [listEntry, setListEntry] = useState([])

// 1.1: Passes textbox entry to the 'entry' object
const handleClick = (event)=>{
  setEntry({inputText:event.target.value}); //*
};

// 1.1: Checks state for initial hook - explore how to make more useful
useEffect(()=>{
    console.log(entry)
});

// 2.1: Passes 'entry' variable to 'listEntry' via 'concat' method
  const logEntry = (textParam)=>{
    console.log(`Pushing ${textParam} to new object`);
    // Checks to see if an entry has been entered in the textInput box
    if (textParam === ""){
      console.log("This value is empty");
      return;
    }
    // const newArray = [...listEntry, entryVal];////////////
    const newArray = listEntry.map((item) =>{
      return {...item} 
    })
    const newObj = {
      entryVal: textParam, 
      completed: false
    }
    newArray.push(newObj);
    console.log(`New array is: ${newObj}`)
    setListEntry(newArray);
    
    // setListEntry(listEntry.concat(entryVal)); 
}

// 3.1: Delete list item
const handleRemove=(index)=>{

    console.log(`Remove Entry button pressed ${index}`);
    let delItem = [
      ...listEntry // Spread operator collect sall the values in the original array and puts them in here
    ];
    delItem.splice(index, 1);
    console.log(delItem);
    setListEntry(delItem);
  }

// 4.1: Change completed state to true
const handleComplete =(index)=>{
  console.log(`The section to change to true is ${index}`)
  //add item to object
  let newArray = [
    ...listEntry
  ];

  newArray[index].completed = !newArray[index].completed;//Switches the Y/N value (true/false)

setListEntry(newArray);

}

// 2.3: Returns all entries in to do list once they are created
// Completed function needs to: Go into array, compare the id in this entry with the array, change the colour of the css shell to red, prompt user to delete
// Key should always be within the first/parent item within the return
const listEntries = listEntry.map((entryObj,index)=>{
  console.log(`List entries are: ${listEntry}`)
  return(
    // <div className="entryContainer" key={index}>
    <div className={entryObj.completed? "entryContainer taskCompleteToggle" : "entryContainer"} key={index}>
      <p>{entryObj.entryVal}</p>
      {/* <p>{entryObj.completed?"yes":"no"}</p> */}
      <button className="taskDelete" onClick={()=>handleRemove(index)}>Delete</button>
      <button className="taskComplete" onClick={()=>handleComplete(index)}>{entryObj.completed? "Undo": "Completed"}</button>
      
    </div>
)}
)
//taskCompleteToggle
return(
    <div>
      <div className="enterTodoContainer">
        <label name="enter-task"><h1>Enter Task</h1></label>
        <input type="text" onChange={handleClick} maxlength="27"></input>
        <button className="taskEnter" onClick={()=>{logEntry(entry.inputText)}}>Add To-Do</button>
        
        </div>
      {listEntries}
      
    </div>
)
}
export default Entries;