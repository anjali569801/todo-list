import React from 'react';
function Input (props){
  return(
    <input  placeholder={props.placeholder} value={props.value} onChange={props.onChange} type={props.type} className="border  border-gray-400 shadow-md rounded-md bg-transparent p-2 w-80 shadow-md my-2 focus:ring focus:ring-yellow-500 focus:border-yellow-500" />
  );
}
export default Input;