import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function IconButton({ children }) {
    return (
        <button>
            <i class="target-icon" />
            {children}
        </button>
    );
}

function Nav({ children }){
    let items = React.Children.toArray(children);
    for(let i = items.length - 1; i >= 1; i--){
        items.splice(i, 0, <span key={i} className='separator'>|</span>);
    }

    return(
        <div><i class="fa fa-address-book" aria-hidden="true"></i></div>
    )
}

function ErrorBox({ children }){
    return(
        <div className="errorbox-wrapper">
            <i class="errorbox-icon fa fa-exclamation-triangle fa-3x mr-2" aria-hidden="true"></i>
            <span className="errorbox-text">
                {children}
            </span>
        </div>
    )
}

ReactDOM.render(
    <ErrorBox>
        Something has gone wrong
    </ErrorBox>,
    document.getElementById('root')
    );
