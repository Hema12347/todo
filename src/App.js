import React, { Component } from 'react';
import './App.css';
import './fonts/font-awesome.css';

var todos = [
  {
    todoTitle: 'Learning React',
    todoDescription: 'React is an open-source front end frontend javascript library which is used to build usr-interfaces especially for single page applications.',
    todoPriority: 'MORNING'
  },
  {
    todoTitle: 'Drink Coffee',
    todoDescription: 'Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain flowering plants in the Coffea genus. From the coffee fruit, the seeds are separated to produce a stable, raw product:',
    todoPriority: 'EVENING'
  },
  {
    todoTitle: 'Dinner',
    todoDescription: 'Vegetarian Tortilla Casserole,Breaded Pork Chops with Apple-Cabbage Slaw,Chicken, Pepper and Corn Stir-Fry,Bacon and Broccoli Rice Bowl..',
    todoPriority: 'NIGHT'
  },
  
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleRemoveTodo(index) {
    this.setState({
      todos: this.state.todos.filter(function(e, i) {
        return i !== index;
      })
    })
  }

  handleAddTodo(todo) {
  this.setState({todos: [...this.state.todos, todo]});
}

  render() {
    return (
      <div className="container">

        <nav className="navbar fixed-top navbar-dark header">
          <img className="todo" src="https://media.istockphoto.com/photos/tablet-with-paper-clip-todo-list-3d-illustration-3d-rendering-picture-id1285082518?b=1&k=20&m=1285082518&s=170667a&w=0&h=b-ByZ7VS2dnHJRvHUBxdp1qLoeNz_XVBGQK7X8eXgGU="alt="logo"/>
          <h1 className='navbar-brand'>TODO-APP</h1>
          <h1 className="navbar-brand">
            Todo Count: <span className="badge badge-pill badge-primary">{this.state.todos.length}</span>
          </h1>
        </nav>

          <div className="row mt-5">
            <br/>
            <TodoInput onAddTodo={this.handleAddTodo}/>
            <hr/>
          </div>

          <div className="row mt-5">
            <div className="col">
              <ul className="list-group">
                { this.state.todos.map((todo, index) =>
                    <li className="list-group-item" key={index}>
                      <h4 className="list-group-item-heading">{todo.todoTitle} <small><span className="badge badge-secondary">{todo.todoPriority}</span></small></h4>
                      <p className="text-justify">{todo.todoDescription}</p>
                      <button className="btn btn-danger btn-sm float-right" onClick={this.handleRemoveTodo.bind(this, index)}><span><i className="fa fa-trash-o" aria-hidden="true"></i></span>&nbsp;&nbsp; Delete</button>
                    </li>
                )}
              </ul>
            </div>
            
        </div>
       
      </div>
    );
  }

 }

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoTitle: '',
      todoDescription: '',
      todoPriority: 'morning'
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleInputChange(event) {
     const target = event.target;
     const value = target.value;
     const name = target.name;

     this.setState({
       [name]: value
     })
   }

   handleSubmit(event) {
    event.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      todoTitle: '',
      todoDescription: '',
      todoPriority: 'morning'
    });
  }

  render() {
    return (
      <div className="col">
        <br/><br/><br/>
        <h4>Add New Todo</h4><br/>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input  name="todoTitle"
                    type="text"
                    className="form-control"
                    id="inputTodoTitle"
                    value={this.state.todoTitle}
                    onChange={this.handleInputChange}
                    aria-describedby="Todo Title"
                    placeholder="Enter Title"></input>
            </div>
            <div className="form-group">
              <label htmlFor="inputTodoPriority" className="control-label text-muted"><small>Priority</small></label>
              <select   name="todoPriority"
                        type="text"
                        className="form-control"
                        id="inputTodoPriority"
                        value={this.state.todoPriority}
                        onChange={this.handleInputChange}
                        aria-describedby="Todo Priority">
                <option>MORNING</option>
                <option>EVENING</option>
                <option>NIGHT</option>
              </select><br/>
            </div>
            <div className="form-group">
              <label htmlFor="inputTodoDescription" className="control-label text-muted"><small>Description</small></label>
              <textarea   name="todoDescription"
                          type="text"
                          className="form-control"
                          id="inputTodoDescription"
                          value={this.state.todoDescription}
                          onChange={this.handleInputChange}
                          aria-describedby="Todo Description"></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary float-right">Add Todo</button>
            </div>
        </form>
      </div>
    )
  }
}

export default App;
