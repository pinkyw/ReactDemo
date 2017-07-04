const React = require('react');

//子子组件
class Item extends React.Component {
    render() {
        return <span style={{color: this.context.color}}>!!!</span>;
    }
}
Item.contextTypes = {
    color: React.PropTypes.string
}
//子组件
class ListItem extends React.Component {
    render() {
        return <li>{this.props.item} <Item></Item></li>;
    }
}
//父组件
class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    getChildContext(){
        return {
            color: "red"
        }
    }
    render() {
        return <ul>{
            this.state.data.map((data, index)=>(
                <ListItem item={data} key={index}></ListItem>
            ))
        }</ul>;
  }
}
List.childContextTypes = {
    color: React.PropTypes.string
}

module.exports = React.createClass({
    render: function () {
        var list = ["aa", "bb", "cc"];
        return <List data = {list}></List>
    }
});