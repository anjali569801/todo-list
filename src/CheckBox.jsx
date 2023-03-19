import React from 'react';
function CheckBox(props){
  return(
    <input checked={props.checked} onChange={props.onChange} type="checkbox" className="w-4 h-4  accent-yellow-500 border border-gray-200 rounded-md m-2 focus:ring-yellow-700 focus:ring focus:ring-offset-2"/>
  );
}
export default CheckBox;