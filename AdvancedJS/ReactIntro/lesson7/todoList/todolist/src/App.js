import React from 'react';
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";
import { defaultState } from './data';
import Filter from './Filter';


class App extends React.Component {
	state = {
		todos: defaultState,
		input: '',
		findedTodos: this.findTodo,
	}

	addTodo = newTodo => this.setState(({ todos }) => ({
		todos: [newTodo, ...todos]
	}))

	removeTodo = id => this.setState(({ todos }) => ({
		todos: todos.filter(todo => todo.id !== id)
	}))

	toggleTodo = toggledTodo => this.setState(({ todos }) => ({
		todos: todos.map(todo => todo.id !== toggledTodo.id
			? todo : { ...toggledTodo, completed: !toggledTodo.completed }
		)
	}))

	markAllCompleted = () => this.setState(({ todos }) => ({
		todos: todos.map(todo => ({ ...todo, completed: true }))
	}))

	markAllActive = () => this.setState(({ todos }) => ({
		todos: todos.map(todo => ({ ...todo, completed: false }))
	}))


	// findTodo = e => {
	// 	const filteredTodos = this.state.todos
	// 		.filter(todo => todo.value.toLowerCase().includes(e.target.value.toLowerCase()))
	// 	this.setState({
	// 		input: e.target.value,
	// 		todos: this.state.todos ? this.state.todos
	// 			.filter(todo => todo.value.toLowerCase().includes(e.target.value.toLowerCase())) : this.state.todos
	// 	})
	// 	console.log('this.finded.todos - ', this.state.findedTodos, 'const filtered todos - ', filteredTodos)
	// }

	render() {
		const { todos } = this.state;
		const completedTodos = todos.filter(todo => todo.completed)
		const activeTodos = todos.filter(todo => !todo.completed)

		return (
			<div className={"container"}>
				<h2>TODO list:</h2>
				<br />
				<NewTodo addTodo={this.addTodo} />

				<div className={"row"}>
					<div className={"col-md-5"}>
{/* 
						<div className={"mb-3"}>
							<input
								type="text"
								className={"form-control"}
								onChange={this.findTodo}
								value={this.state.input}
							/>
						</div> */}

						<TodoList
							title={"Active todos"}
							todos={activeTodos}
							removeTodo={this.removeTodo}
							toggleTodo={this.toggleTodo}
						/>
					</div>
					<div className={"offset-md-2 col-md-5"}>
						<TodoList
							title={"Completed todos"}
							todos={completedTodos}
							removeTodo={this.removeTodo}
							toggleTodo={this.toggleTodo}
						/>
					</div>
				</div>

				<button className={"btn btn-success btn-lg btn-block"} onClick={this.markAllCompleted}>
					Complete all todos
                </button>
				<button className={"btn btn-danger btn-lg btn-block"} onClick={this.markAllActive}>
					Mark all as active
                </button>
			</div>
		);
	}

}

export default App;
