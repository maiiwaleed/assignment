import * as React from "react";

type MyState = {
  value: string; 
};
class Task2 extends React.Component{
 
  state:MyState = {
    value: ''
  };
 
  render() {
    return (
      <div>
        <label>Controlled Input: </label>
        <input  type="text"
            placeholder="Task..."
            name="task"
            value={this.state.value}
            onChange={(e)=>{this.setState({value:e.target.value});
            }}/>
        <br />
        <br />
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default Task2;
