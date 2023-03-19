import React from 'react';
import Input from './Input';
import Button from './Button';
import Span from './Span';
import H2 from './H2';

function SetDate (props){
  
    const [dateInputValue, setDateInputValue] = React.useState('');
	console.log('value', dateInputValue);

  const onDateInputChange = (event) =>{
    setDateInputValue(event.target.value);
  }
  
	const setDate = () => {
		props.onCreate(dateInputValue);

		setDateInputValue('');

		props.onClose();
	};
  
  return(
    <div className="border m-4 shadow-md rounded-md bg-gray-100 p-4">
      
			<H2>set date</H2>
      <div>
					<Span>Date:</Span>
        
					<Input type="date"
						value={dateInputValue}
					onChange={onDateInputChange}
					/>
			<Button onClick={setDate}>submit</Button>
    </div>
    </div>
  );
}
export default SetDate;