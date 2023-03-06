import './App.css';
//In modern react we do not need import React, 
//however when JSX compiling in to calls React.createElement in olde react we need it
//

export default function App(){
   return (
    <>
      <h1>Hello World</h1>
      <p>Test</p>   
    </>  
    );
}
