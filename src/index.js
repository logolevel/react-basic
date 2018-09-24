import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', null, 'React Todo');
const subtitle = React.createElement('p', { className: 'subtitle' }, 'This is my first app on React');
const container = React.createElement('div', null, title, subtitle);
const app = (
    <div>
        <h1>React ToDo</h1>
        <p className="subtitle">This is my first app on React</p>
    </div>
);

ReactDOM.render(app, document.getElementById('root'));