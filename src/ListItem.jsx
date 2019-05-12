import React from "react";


class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createTodoText: this.props.createTodoText,
      createTodoPriority: this.props.createTodoPriority,
      toggleDisplay: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEditDisplay= this.handleEditDisplay.bind(this);
  }
  
  handleChange(e) {
    if (e.target.name === "createTodoText") {
      this.setState({ createTodoText: e.target.value });
    } else if (e.target.name === "createTodoPriority") {
      this.setState({ createTodoPriority: e.target.value });
    }
  }
  
  handleEditDisplay() {
    var toggleDisplay = this.state.toggleDisplay;
    if (toggleDisplay = true) {
      this.setState({
        toggleDisplay: false
      });
    } else {
      this.setState({
        toggleDisplay: true
      });
    }
    console.log(this.state.toggleDisplay);
  };
  
  render() {
    return(
      <div>
        <button 
        className='list-group-item-success'
        value={this.state.toggleDisplay}
        onClick={() => this.handleEditDisplay()}

        >{this.props.createTodoText}</button>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add New Todo</h5>

              <div className="form-group">
                <label htmlFor="create-todo-text">I want to...</label>
                <textarea
                  className="create-todo-text form-control"
                  name="createTodoText"
                  type="string"
                  value={this.state.createTodoText}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="create-todo-priority">
                  How much of a priority is this?
              </label>
                <select
                  className="create-todo-priority form-control"
                  name="createTodoPriority"
                  value={this.state.createTodoPriority}
                  onChange={this.handleChange}
                >
                  <option>Select a priority</option>
                  <option value="1">Low priority</option>
                  <option value="2">Medium priority</option>
                  <option value="3">High priority</option>
                </select>
              </div>

              <button
                className="button create-todo btn btn-success btn-block"
                name="button"
                type="submit"
                onClick={() =>
                  this.props.handleAdd(this.state.createTodoText, this.state.createTodoPriority)
                }
              >
                Add!
            </button>

            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default ListItem;