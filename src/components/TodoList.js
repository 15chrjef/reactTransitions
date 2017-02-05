import React from 'react';
import ReactCSSTransitionsGroup from 'react-addons-css-transition-group';
import './TodoList.css'
export default class TodoList extends React.Component {
	constructor(){
		super()
		this.state = {
			items: ['hello', 'world', 'click', 'me']
		}
	}
	handleAdd() {
		var item = prompt('what would you like to add?')
		var newItems = this.state.items.concat([item])
		this.setState({ items: newItems})
	}
	handleRemove(i) {
		var newItems = this.state.items.slice();
		newItems.splice(i, 1);
		this.setState({ items: newItems })
	}
	render() {
		const items = this.state.items.map((item, i) => (
			<div key={i} onClick={this.handleRemove.bind(this, i)}>
				{item}
			</div>
		))
		return (
			<div>
				<button onClick={this.handleAdd.bind(this)}>Add Item</button>
				<ReactCSSTransitionsGroup 
					transitionName='example' 
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}
				>
					{items}
				</ReactCSSTransitionsGroup>
			</div>
		)
	}
}