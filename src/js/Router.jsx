import React from 'react'
const ReactDOM = require('react-dom');
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
require('../css/index.scss');
const HigherOrder = require('./demo/Higher-order-Components/index.jsx');
const ParentToChild = require('./demo/components-communication-in-react/parent-to-child.jsx');
const ChildToParent = require('./demo/components-communication-in-react/child-to-parent.jsx');
const AcrossComponent = require('./demo/components-communication-in-react/across-component.jsx');
const EmmiterComponent = require('./demo/components-communication-in-react/emitter-component.jsx');

module.exports = React.createClass({
	render: function() {
		return <Router>
			<div className="g-Container">
				<ul className="m-Slider">
					<li><NavLink to="/">Home</NavLink></li>
					<li>组件通信
						<ul className="m-SliderItem">
							<li><NavLink to="/ParentToChild" activeClassName="active">- 父组件向子组件通信</NavLink></li>
							<li><NavLink to="/ChildToParent" activeClassName="active">- 子组件向父组件通信</NavLink></li>
							<li><NavLink to="/AcrossComponent" activeClassName="active">- 跨级组件通信</NavLink></li>
							<li><NavLink to="/EmmiterComponent" activeClassName="active">- 没有嵌套关系的组件通信</NavLink></li>
						</ul>
					</li>
					<li><NavLink to="/HigherOrder" activeClassName="active">高阶组件</NavLink></li>
				</ul>
				<div className="m-Content">
					<Route path="/ParentToChild" component={ParentToChild}/>
					<Route path="/ChildToParent" component={ChildToParent}/>
					<Route path="/AcrossComponent" component={AcrossComponent}/>
					<Route path="/EmmiterComponent" component={EmmiterComponent}/>
					<Route path="/HigherOrder" component={HigherOrder}/>
				</div>
			</div>
	  	</Router>
	}
});