import * as React from "react";

// Components
import Input from "./components/Input";
import List from "./components/List";

//
type MyState = {
  inputValue:string,
  data: string[],
  results:string[]
};

class Task4 extends React.Component {

  state:MyState = {
    inputValue: "",
    data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    results: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
  };

  updateInputFromChild = (inputValueFromChild: string): void => {
    this.setState({...this.state,inputValue:inputValueFromChild});
    this.setState({...this.state,results:this.state.data.filter(item=>item.toLowerCase().includes(inputValueFromChild.toLowerCase()) )});
    
    
  };

  render() {
    return (
      <div>
        <Input updateInput={this.updateInputFromChild}  />
        <br />
        <List currentList={this.state.results}/>
      </div>
    );
  }
}

export default Task4;
