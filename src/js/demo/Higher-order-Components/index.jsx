const React = require('react');

const Enhance = (WrappedComponent) => class extends React.Component {
    constructor(props) {
    	super(props);
        this.state = { data: null };
    }
    componentDidMount() {
        this.setState({ data: 'Hello' });
    }
    render() {
    	// return a component which can receive data
        return <WrappedComponent {...this.props} data={this.state.data} />;
    }
};

class MyComponent extends React.Component {
    render() {
        if (!this.props.data) return <div>Waiting...</div>;
        return <div>{this.props.data}</div>;
    }
}

module.exports = Enhance(MyComponent);
