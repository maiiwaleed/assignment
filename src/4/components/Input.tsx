import * as React from "react";

/*
     * The IProps interface defines the props in order to typescript to typecheck for errors.
     * 
     * If you would like to proceed without defining types do the following: 
     * const Input: React.SFC<any> = (props) => {
     *                        ^^^
     * 
     * and remove the IProps interface
*/

//
interface IProps {
 
    updateInput: (inputValueFromChild:string) => void;
  
}
const Input: React.FC<IProps> = props => {
  const [searchInput, setSearchInput] = React.useState<string>("");
  return (
    <div>
      <label>Search Input: </label>
      <input value={searchInput}
            onChange={ (e)=>{setSearchInput(e.target.value); props.updateInput(e.target.value); 
             } } />
    </div>
  );
};

export default Input;
