import * as React from "react";

type MyState = {
  inputValue:string,
  data: string[]; 
};
class Task3 extends React.Component {
  state:MyState = {
    inputValue: "",
    data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
  };

  
  render() {
    return (
      <div>
        <label>Search Input: </label>
        <input type="text"
            placeholder="Search Tasks"
            name="task"
            value={this.state.inputValue}
            onChange={ (e)=>{this.setState({...this.state,inputValue:e.target.value});
            
            }
                      }
        />
        <br />
        <br />
        {this.state.data.filter(item=>item.toLowerCase().includes(this.state.inputValue.toLowerCase()) ).map((item,i)=><div key={i}>{item}</div>)}
       
      </div>
    );
  }
}

export default Task3;
