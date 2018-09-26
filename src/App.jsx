import React from 'react';
import PropTypes from 'prop-types';

import todos from './todos';
import Header from './components/Header';
import Todo from './components/Todo';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData
        };
    };

    render() {
        return (
            <main>
                <Header title={this.props.title} />
                <section className="todo-list">
                    {this.state.todos.map(todo =>
                        <Todo key={todo.id} title={todo.title} completed={todo.completed} /> )
                    }
                </section>
            </main>
        );
    }
}

App.propTypes = {
    title: PropTypes.string,
    initialData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired
}

App.defaultProps = {
    title: 'React Todo'
};

export default App;