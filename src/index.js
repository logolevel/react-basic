import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
            <h1>React ToDo</h1>
            <p className="subtitle">This is my first app on React</p>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));