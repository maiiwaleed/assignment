import * as React  from "react";
import "./App.css";
import TodoTask from "./Components/TodoTask";
import { ITask } from "./Interfaces";

const App: React.FC = () => {
  const [task, setTask] = React.useState<string>("");
  const [inputVal, setInputVal] = React.useState<string>("");
  const [deadline, setDealine] = React.useState<number>(0);
  const [todoList, setTodoList] = React.useState<ITask[]>([]);
  const [matchedSearch, setMatchedSearch] = React.useState<ITask[]>([]);
  const [showComplete, setShowComplete] = React.useState<boolean>(false);
  const [isDone, setIsDone] = React.useState<boolean>(false);
  const [completeList, setCompleteList] = React.useState<ITask[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDealine(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline ,id:Date.now().toString(),done:isDone};
    setTodoList([...todoList, newTask]);
    setTask("");
    setDealine(0);
  };

  const deleteTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  const completeTask = (inputId: string, state:boolean ): void => {
   let updateLocation:number;
    
      todoList.some(function(todo,i) {
        if(todo.id === inputId){
          updateLocation=i;
              // 1. Make a shallow copy of the items
        let items = [...todoList];
        // 2. Make a shallow copy of the item you want to mutate
        let item = items[updateLocation];
        
        // 3. Replace the property you're intested in

        // setIsDone(!isDone)
          item.done = state;
             
        // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
          items[updateLocation] = item;
        // 5. Set the state to our new copy

          setTodoList(items);
        }

    
        
        return todo.id === inputId;

      })
    
              
      
    
  };

  const toggleCompleted = ()=>{
  //  if(showComplete)
      
      if(showComplete){
        setCompleteList(todoList.filter(todo=>todo.done==true));
      
      }
    
    
}

  const search = (taskArr : ITask[]):void =>{
    if(inputVal){
      setMatchedSearch( todoList.filter(item=>item.taskName.toLowerCase().includes(inputVal.toLowerCase()) )) }

    else{
      setMatchedSearch(todoList);}
  }

  const receiveCompleteTask = (list:ITask[]): void => {
  //  console.log(list);
  };

  React.useEffect(()=>{

    console.log(inputVal);
    search(todoList);
  },[inputVal]);

  React.useEffect(()=>{
    toggleCompleted();
   
   
  },[showComplete])

  return (
    <div className="App">
     
      <div className="header">
        
        <div className="inputContainer">
        <input type="text" placeholder="search tasks..."
           onChange={ (e)=>{setInputVal(e.target.value);  } } />

          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
         
          {/* <input
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          /> */}
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <button className={!showComplete? "btn" : "btnSelected"} onClick={()=>{setShowComplete(!showComplete);}}>toggle completed</button>
      <div className="todoList">
        
           { inputVal? matchedSearch.map((task: ITask, key: number) => {
          return  <TodoTask  key={key} task={task} deleteTask={deleteTask} taskIdentity={task.id} inputVal={inputVal} todoList={todoList} completeTask={completeTask} />
              
        } )  : todoList.map((task: ITask, key: number) => {
          return  <TodoTask  key={key} task={task} deleteTask={deleteTask} taskIdentity={task.id} inputVal={inputVal} todoList={todoList} completeTask={completeTask} />
              
        } )   } ;

       { !showComplete? <></> :<h4>complete</h4>}
       { !showComplete? <></> : todoList.filter(item=>item.done==true).map((task: ITask, key: number) => {
          return  <TodoTask  key={key} task={task} deleteTask={deleteTask} taskIdentity={task.id} inputVal={inputVal} todoList={todoList} completeTask={completeTask} />
              
        } )  }

      </div>
   </div>
  );
}; 

export default App;
