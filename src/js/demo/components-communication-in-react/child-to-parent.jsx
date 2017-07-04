const React = require('react');

class ListItem extends React.Component {
    render() {
        return <li><input name={this.props.index} value={this.props.item} onChange={this.props.handleChange}/>{this.props.item}</li>;
    }
}
class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    handleChange(val, e){
        var sdata = this.state.data;
        sdata[e.target.name] = e.target.value;
        this.setState({
            data: sdata
        })
    }
    render() {
        return <ul>
            {
                this.state.data.map((data, index)=>(
                    <ListItem item={data} key={index} index={index} handleChange={this.handleChange.bind(this, data)}></ListItem>
                ))
            }
        </ul>;
    }
}
module.exports = React.createClass({
    render: function () {
        var list = ["aa", "bb", "cc"];
        return <List data = {list}></List>
    }
});