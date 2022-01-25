import * as React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete: string): void,
  taskIdentity:string,
  inputVal:string,
  todoList:ITask[],
  completeTask(inputId: string, state:boolean): void;
}

const TodoTask = ({ task, deleteTask,inputVal,todoList,completeTask }: Props) => {
  const [complete, setComplete] = React.useState<boolean>(false);
  const [completeList, setCompleteList] = React.useState<ITask[]>([]);
  let list= todoList;
  let temp:ITask[]=[];
  // const completeTask = (inputId: string): void => {
  //   if(task.id===inputId ){
  //    setComplete(!complete);
  //     for(let i=0;i<list.length;i++){
  //       if(list[i].id==inputId && complete==false)
  //      { 
  //        list[i].done=true;
  //        setCompleteList(Array.from(new Set([...completeList,list[i]])))
  //       temp.push(list[i])
  //       receiveCompleteTask(completeList)
  //       // console.log(Array.from(new Set([...completeList,list[i]])));
  //     }
  //     else{
  //       for(let i=0;i<list.length;i++){
  //         list[i].done=complete;

  //       }

  //       // console.log(list);
  //       // console.log(temp);
  //     }
  //      }
   
  //     //  console.log(completeList);
  //   //  setComplete(temp)
      
  //    }
        
  // };

  React.useEffect(() => {
    
   
       console.log(complete,task.id);
       console.log(todoList)

  }, [complete,todoList]);
  
  

  return (
    <div className="task">
     <span > <input  key={task.id} type='checkbox' onChange={()=>{setComplete(!complete); completeTask(task.id,!complete);}} /> </span>
     
        <div className="content">
           <span className= {complete? 'completed':''}>{task.taskName}</span> 
          <span className={complete? 'completed':''}></span>
        </div> 
    
      <button
        onClick={() => {
          deleteTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
