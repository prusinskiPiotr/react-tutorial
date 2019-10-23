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

function NavItem({ children }){
    return (
        <a>{children}</a>
    );
}

function Nav({ children }){
    let items = React.Children.toArray(children);
    for(let i = items.length - 1; i >= 1; i--){
        items.splice(i, 0, <span key={i} className='separator'>|</span>);
    }

    return(
        <div>{items}</div>
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

function FirstChildOnly({ children }) {
    return(
        <div>
        {React.Children.map(children, (child, i) => {
          if (i > 0) return
          return child
        })}
      </div>
    )
}

function LastChildOnly({ children }) {
    const totalChildren = React.Children.count(children)
    return(
        <div>
            {React.Children.map(children, (child, i) => {
                if (i < totalChildren - 1) return 
                return child
            })}
        </div>
    )
}

function Head({children, number}){
    const totalChildren = React.Children.count(children)
    return(
        <div>
            {React.Children.map(children, (child, i) => {
                if (i > totalChildren - number) return
                return child
            })}
        </div>
    )
}

function Tail({children, number}){
    const totalChildren = React.Children.count(children)
    return(
        <div>
            {React.Children.map(children, (child, i) => {
                if (i < totalChildren - number) return
                return child
            })}
        </div>
    )
}

ReactDOM.render(
    // <ErrorBox>
    //     Something has gone wrong
    // </ErrorBox>,
    <Tail number={3}>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>Portfolio</NavItem>
        <NavItem>Careers</NavItem>
    </Tail>,
    document.getElementById('root')
    );
