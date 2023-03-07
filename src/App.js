import "./App.css";
//In modern react we do not need import React,
//however when JSX compiling in to calls React.createElement in olde react we need it
//

export default function App() {

  //define constant handleClick
  const handleClick = () => {
    console.log('clicked');
  };

  //TODO: implement different types of events
  return (
    <button
      onClick={handleClick1}>
      Click Me 
    </button>
  );
}

/**
 * onClick={() => {
        console.log("clicked");
      }}
 * 
 */

//console log clicked1
function handleClick1() {
  console.log("clicked1");
}

//native Event
function handleNativeEvent(event){
  console.log(event.nativeEvent);
}

//Synthetic event
function handleSyntheticEvent(event){
  console.log(event)
}