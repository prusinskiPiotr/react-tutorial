import React from 'react';
import ReactDOM from 'react-dom';

function MyThing(){
    return (
        <>
            <div className='book'>
                <div className='title'>
                    The title
                </div>
                <div className='author'>
                    The Author
                </div>
                <div className='stats'>
                    <li className='rating'>
                        5 stars
                    </li>
                    <li className='isbn'>
                        12-345678-910
                    </li>
                </div>
            </div>
        </>
    )
}

function NotMyThing(){
    return React.createElement('div', {'className': 'book'},
        React.createElement('div', {'className': 'title'}, 'The title'),
        React.createElement('div',{'className': 'author'}, 'The author'),
        React.createElement('div',{'className': 'stats'},
            React.createElement('li', {'className': 'rating'}, '5 stars'),
            React.createElement('li', {'className': 'isbn'}, '12-345678-910')
        )
    );
}
function Greeting(){
    const username = "Peter";

    return (
        <span>
            {username ? 'Hello, ' + username : 'Not logged in'}
        </span>
    )
}
function Data(){
    return (
        <>
            <td>hello</td>
            <td>hello2</td>
            <td>hello3</td>
        </>
    )
}
function Table(){
    return(
        <table>
            <tbody>
                <tr>
                    <Data/>
                </tr>
            </tbody>
        </table>
    )
}
function DisplayAll(){
    return(
        <>
            <Greeting/>
            <br/><br/>
            <MyThing/>
            <br/>
            <NotMyThing/>
            <br/>
            <Table/>
        </>
    );
}
ReactDOM.render(
    <DisplayAll/>,
    document.querySelector('#root')
);

