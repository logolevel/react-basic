import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Todo from './components/Todo';

function App(props) {
    console.log(props);
    return (
        <main>
            <Header title={props.title} />
            <section className="todo-list">
                <Todo title={"Learn JavaScript"} completed={true} />
                <Todo title={"Learn React"} completed={false} />
            </section>
        </main>
    );
}

App.propTypes = {
    title: PropTypes.string
}

App.defaultProps = {
    title: 'React Todo'
};

export default App;