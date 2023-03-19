import React from 'react';
function H1(props){
  return(
   <h1 className="text-2xl font-extrabold bg-yellow-400 w-60"> {props.children}</h1> 
  );
}
export default H1;