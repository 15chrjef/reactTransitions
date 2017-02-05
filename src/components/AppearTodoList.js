import React from 'react';
import ReactCSSTransitionsGroup from 'react-addons-css-transition-group';
import './AppearTodoList.css'

export default class TodoList extends React.Component {
	constructor(){
		super()
		this.state = {
			items: ['these', 'words', 'transition', 'in', 'when', 'mounted']
		}
	}
	render() {
		const items = this.state.items.map((item, i) => (
			<div key={item}>
				{item}
			</div>
		))
		return (
			<div>
				<ReactCSSTransitionsGroup 
					transitionName='example' 
					transitionAppear={true}
					transitionAppearTimeout={1500}
				>
					{items}
				</ReactCSSTransitionsGroup>
			</div>
		)
	}
}