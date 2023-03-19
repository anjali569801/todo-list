import React from 'react';

function Button(props) {
let themeClass="text-white bg-yellow-500 hover:bg-yellow-600 border-transparent";
let radiusClass="rounded-md";
  
if(props.theme==='secondary'){
  themeClass="border border-gray-200  ";
  
}
  if(props.theme==='primary'){
     radiusClass="rounded-full";
  }
  return (
    <button className={"inline-flex justify-center text-lg font-medium px-4 m-2 text-center foucs:ring-1 focus:ring focus:ring-offset-2 focus:ring-yellow-500 shadow-md focus:outline-none " + themeClass +' '+ radiusClass} onClick={props.onClick} disabled={props.disabled}>
      {props.icon && <span className="mr-2 text-lg mb-1 inline-block">{props.icon}</span>}
      {props.children}</button>
  );
}

export default Button;