 import React from 'react';
 import Button from './Button';
 import H2 from './H2'
 import Input from './Input';
function Creat(props) {

  const[inputValue,setInputValue]=React.useState([]);

  const onInputChange = (event) =>{
    setInputValue(event.target.value);
  }
  
 const saveTodo = () =>{
   
   props.onCreate(inputValue);
   
  setInputValue('');
   
   
   props.onClose();
 }
  
  
  return (
    <div className="border border-gray-300  flex flex-col shadow-lg  justify-evenly p-4">
      <div>
      <H2>Creat a todo</H2>
      <Input type="text" placeholder="write things to do " value={inputValue} onChange={onInputChange}/>
      <div>
      <Button  onClick={saveTodo}  >save</Button>
      <Button theme="secondary" onClick= 
        {props.onClose} >cancel</Button>
      </div>
      </div>   
    </div>
    );
}
export default Creat;