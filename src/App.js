import './App.css';
import React from 'react';
//In modern react we do not need import React, 
//however when JSX compiling in to calls React.createElement in olde react we need it
//

export default function App(){
   return (
    <React.Fragment>
      <h1>Hello World</h1>
      <p>Test</p>   
    </React.Fragment>  
    );
}
