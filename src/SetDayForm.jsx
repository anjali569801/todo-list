import React from 'react';
import SetDay from './SetDay';

function SetDayForm (props){
  return(
    
    <SetDay onCreate={props.onCreate} onClose={props.onClose}></SetDay>
   
      
  );
}
export default SetDayForm;
