import React from 'react';
import {connect} from 'react-redux';

export const CONST_VALUE = 'I am Mr. Const';
class DemoClass extends React.Component {
    constructor() {
        super();
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
        this.changeValue = this.changeValue.bind(this);
        // this.state = { counter: 1 };
    }
    changeValue() {

    }

    incrementCounter() {
        // this.setState({counter: ++this.state.counter});
        this.props.dispatch({type: 'INCREMENT'});
    }

    decrementCounter(e) {
       // this.setState({counter: --this.state.counter});
       this.props.dispatch({type: 'DECREMENT'});
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.counter} onChange={this.changeValue}/>
                <button className="square" onClick={this.incrementCounter}>++</button>
                <button className="square" onClick={this.decrementCounter}>--</button>
            </div>
        );
    }
}

const setStatesToProps = store => ({
     counter: store.counter
});

export default connect(setStatesToProps)(DemoClass);