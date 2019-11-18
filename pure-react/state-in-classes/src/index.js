import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class CountingParent extends React.Component{
    // The constructor is called when a component is created
    constructor(props) {
        super(props);
        
        // Set the state here. Use "props" if needed.
        this.state = {
            actionCount: 0
        };

        // Bind the event handler function, so that its
        // 'this' binding isn't lost when it gets lassed
        // to the button
        this.handleAction = this.handleAction.bind(this);
    }

    handleAction(action) {
        console.log('Child says', action);
        // Replace actionCount with an incremented value
        this.setState({
            actionCount: this.state.actionCount + 1
        });
    }

    render(){
        return (
            <div>
                <Child onAction={this.handleAction}/>
                <p>Clicked {this.state.actionCount} times</p>
            </div>
        );
    }
}


function Child({ onAction }) {
    return (
        <button onClick={onAction}>
            Click Me!
        </button>
    );
}

ReactDOM.render(<CountingParent />, document.getElementById('root'));
