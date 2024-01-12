import React, { Component } from "react";
import { toast } from "react-toastify";

class Todo extends Component {
  state = {
    newTodo: "test",
    todoList: [
      {
        text: "one",
        completed: false,
      },
      {
        text: "two",
        completed: true,
      },
    ],
  };

  onNewTodoChange(e) {
    console.log(e.target);
    // this.setState({ newTodo: e.target.value });
    // console.log(this.state.newTodo);
  }

  onAddToDo = () => {
    console.log("test");
    const { newTodo, todoList } = this.state;
    const newToDoL = newTodo.toLowerCase();
    if (!newTodo) {
      toast("Please enter a valid hobby!");
      return;
    }

    if (hobbies.includes(newToDoL)) {
      toast("This todo already exists!");
      return;
    }

    const newToDoRecord = {
      text: newTodo,
      completed: false,
    };

    this.setState({ todoList: [newToDoRecord, ...todoList] });
    toast(`to do added successfully!`);
  };

  handleToggle =(index)=>{
    const {  todoList } = this.state;
    const toUpdate =[...todoList]
    toUpdate[index].completed = !todoList[index].completed
    this.setState({ todoList: [...toUpdate] });

  }

  render() {
    console.log(this.state);
    const { newTodo, todoList } = this.state;
    // console.log("11111", newTodo);
    return (
      <div style={{ width: '600px',
      height: '600px',
      backgroundColor: '#3498db',
      color: '#fff',

      justifyContent: 'center',
      alignItems: 'center',
      border: "1px solid #ccc",
      borderRadius: '8px'}}>
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "15px",
            margin: "10px",
            display: "flex",
            alignItems: "center",
            width: "400px",
          }}
        >
          <input
            style={{ outline: "none", width: "100%", padding: "12px" }}
            type="text"
            placeholder="Enter a to do item"
            // value={newTodo}
            onChange={this.onNewTodoChange}
          />

          <button
            style={{ width: "200px", fontWeight: 600 }}
            onClick={this.onAddToDo}
          >
            Add todo
          </button>
        </div>

        <div style={{ width: 300 }}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {todoList.map((item, index) => (
              <li
                key={index}
                style={{
                  borderBottom: "1px solid #ccc",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textDecoration: item.completed ? 'line-through' : 'none'
                }}
              >
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={ this.handleToggle(index)}
                />
                <span style={{ marginRight: "10px" }}>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todo;
