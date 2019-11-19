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
        this.handleReset = this.handleReset.bind(this);
    }

    handleAction() {
        // Replace actionCount with an incremented value
        this.setState({
            actionCount: this.state.actionCount + 1
        });
    }

    handleReset(){
        this.setState({
            actionCount: 0
        });
    }

    render(){
        return (
            <div>
                <Child onAction={this.handleAction}/>
                <Reset onAction={this.handleReset}/>
                <p>Clicked {this.state.actionCount} times</p>
            </div>
        );
    }
}

function Reset({ onAction }){
    return(
        <button onClick={onAction}>
            Reset button
        </button>
    )
}

function Child({ onAction }) {
    return (
        <button onClick={onAction}>
            Click Me!
        </button>
    );
}

const Page = () => (
    <div>
        <CountingParent2/>
    </div>
)

class CountingParent2 extends React.Component {
    // initialize state with a property initializer
    // you can access this.props id needed
    state = {
        actionCount: 0
    };

    // writing the handler as an arrow function
    // means it will retain the proper value of 
    // 'this', so we can avoid having to bind it
    handleAction = (action) => {
        console.log('Child says', action);
        // Replace actionCount with an incremented value
        this.setState({
            actionCount : this .state.actionCount + 1
        });
    }
    
    handleReset = (action) => {
        this.setState({
            actionCount: 0
        });
    }

    render(){
        return(
            <div>
                <Child onAction={this.handleAction}/>
                <Reset onAction={this.handleReset}/>
                <p>Clicked {this.state.actionCount}</p>
            </div>
        )
    }
}

ReactDOM.render(<Page />, document.getElementById('root'));
