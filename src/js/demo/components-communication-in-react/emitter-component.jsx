const React = require('react');
import {EventEmitter} from 'events';
var emitter = new EventEmitter();

class A extends React.Component {
    handleChange (e) {
        emitter.emit("ItemChange", e.target.value);
    }
    render() {
        return <input onChange={this.handleChange} />;
    }
}
class B extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: ""
        }
    }
    render() {
        return <span>{this.state.data}</span>;
    }
    componentDidMount() {
        var _this = this;
        this.itemChange = emitter.addListener("ItemChange", (msg) => {
            _this.setState({data: msg});
        })
    }
    componentWillUnMount() {
        emitter.removeListener(this.itemChange);
    }
}
//父组件
class Parent extends React.Component {
    render() {
        return <div><A></A> <B></B></div>;
    }
}

module.exports = React.createClass({
    render: function () {
        return <Parent></Parent>
    }
});