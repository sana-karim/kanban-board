import { Task } from './Task';
import './Todo.css';

export const Todo = ({ todoData, leftBtnClk, rightBtnClk, deleteBtnClk }) => {

    const handleDeleteBtnClk = (data) => {
        deleteBtnClk(data);
    }

    const taskLoop = () => {
        let taskLoopArray = [];
        for (let i = 0; i < todoData.length; i++) {
            taskLoopArray.unshift(
                <Task key={i} name={todoData.length && todoData[i].inputValue} leftBtnClk={() => leftBtnClk(todoData[i])} rightBtnClk={() => rightBtnClk(todoData[i])} deleteBtnClk={() => handleDeleteBtnClk(todoData[i])} />
            )
        }
        return taskLoopArray;
    }

    const allowDrop = (event) => {
        event.preventDefault();
        console.log("prevented");
    }
    const drop = (event) => {
        let data = event.dataTransfer.getData('text');
        console.log(data);
        event.target.appendChild(document.getElementById(data));
        console.log('onDrop Called');
    }

    return (
        <div className='todo-container'>
            <div className="todo-top">
                <span>Todo</span>
            </div>
            <div onDragOver={(event) => allowDrop(event)} onDrop={(event) => drop(event)} className="todo-bottom">
                {taskLoop()}
            </div>
        </div>
    )
}