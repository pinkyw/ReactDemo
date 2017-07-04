const React = require('react');

class ListItem extends React.Component {
    render() {
        return <li>{this.props.item}</li>;
    }
}
class List extends React.Component {
    render() {
        return <ul>
                {this.props.data.map((data, index) => (
                    <ListItem item={data} key={index}></ListItem>
                ))}
            </ul>
    }
}
module.exports = React.createClass({
    render: function () {
        var list = ["aa", "bb", "cc"];
        return <List data = {list}></List>
    }
});