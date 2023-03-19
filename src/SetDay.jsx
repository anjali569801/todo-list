import React from 'react';
import Input from './Input';
import Button from './Button';
import Span from './Span';
import H2 from './H2';

function SetDay(props) {
	const [dayInputValue, setDayInputValue] = React.useState('');
  
  const onDayInputChange = (event) =>{
    setDayInputValue(event.target.value);
  }
  
  const setDay = () => {
		props.onCreate(dayInputValue);

		setDayInputValue('');

		props.onClose();
	};
	return (
		<div className="border m-4 shadow-md rounded-md bg-gray-100 p-4">
			<H2>set day</H2>
			<div>
				
					<Span>Day:</Span>
					<Input
						placeholder="Day"
						value={dayInputValue}
						 onChange={onDayInputChange}
					/><Button onClick={setDay}>save</Button>
		</div>
      </div>
	);
}
export default SetDay;
