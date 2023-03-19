import React from 'react';
import Button from './Button';
import Creat from './Creat';
import Container from './Container';
import ToDoThings from './ToDoThings';
import H1 from './H1';
import H2 from './H2';


let i = localStorage.getItem('id_index') || 0;
function Page() {
	const [todoFormVisible, setTodoFormVisibility] = React.useState(false);

	const savedTodoList = JSON.parse(localStorage.getItem('todolist')) || [];

	const [todoList, setTodoList] = React.useState(savedTodoList);

	const updateTodoList = (todoList) => {
		setTodoList(todoList);
		localStorage.setItem('todolist', JSON.stringify(todoList));
	};

	const ShowTodoForm = () => setTodoFormVisibility(true);

	const hideTodoForm = () => setTodoFormVisibility(false);

	const completeTodoList = todoList.filter(t => t.done);

	const inCompleteTodoList = todoList.filter(t => !t.done);

	const addTodo = (todoTitle) => {
    localStorage.getItem('id_index',++i);
		updateTodoList([...todoList, { id: i, title: todoTitle, done: false }]);
   
	};

	const onTodoDelete = (todo) => {
		const newTodoList = todoList.filter(t => t.id !== todo.id);
		updateTodoList(newTodoList);
	};

	const markAsDone = (todo) => {
		todo.done = true;
		updateTodoList([...todoList]);
	};

	const markAsNotDone = (todo) => {
		todo.done = false;
		updateTodoList([...todoList]);
	};

	return (
		<div>
			<Container>
				<H1> Things to get done</H1>
				<H2> Things to do</H2>

				{inCompleteTodoList.map(task => (
					<ToDoThings
						done={false}
						onDelete={onTodoDelete}
						onStatusChange={markAsDone}
						key={task.id}
						todo={task}
					/>
				))}

				{!inCompleteTodoList.length && <div>no todo here!</div>}

				{!todoFormVisible && (
					<Button onClick={ShowTodoForm} theme="primary" icon="+">
						Add todo
					</Button>
				)}

				{todoFormVisible && <Creat onClose={hideTodoForm} onCreate={addTodo} />}

				{completeTodoList.map(task => (
					<ToDoThings
						done={true}
						onDelete={onTodoDelete}
						onStatusChange={markAsNotDone}
						key={task.id}
						todo={task}
					/>
				))}
				{!completeTodoList.length && <div>no done todo here!</div>}
			</Container>
		</div>
	);
}
export default Page;

