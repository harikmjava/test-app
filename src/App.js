import "./App.css";
//In modern react we do not need import React,
//however when JSX compiling in to calls React.createElement in olde react we need it
//

export default function App() {

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <button
      onClick={() => {
        console.log("clicked");
      }}
    >
      Click Me
    </button>
  );
}

function handleClick() {
  console.log("clicked1");
};

