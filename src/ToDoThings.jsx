import React from 'react';
import CheckBox from './CheckBox';
import { RiDeleteBinLine } from 'react-icons/ri';

function ToDoThings(props) {
	const onCheckboxChange = () => {
		props.onStatusChange(props.todo);
	};

	const onDelete = () => {
		props.onDelete(props.todo, props.done);
	};

	return (
		<div
			className="flex items-center font- 
      medium"
		>
			<CheckBox checked={props.done} onChange={onCheckboxChange} />
			<marquee behavior="alternate">
				<span
					className={
						'ml-2 font-medium text-xl ' + (props.done && 'line-through')
					}
				>
					{props.todo.title}
				</span>
			</marquee>
			<RiDeleteBinLine onClick={onDelete} />
		</div>
	);
}
export default ToDoThings;
