import * as React from "react";

// Components
import Item from "./Item";

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
 
  currentList: string[];

}
const List: React.FC<IProps> = props => {
  return <div> {props.currentList.map((item,i)=><div key={i}>{item}</div>)}  </div>;
};

export default List;
