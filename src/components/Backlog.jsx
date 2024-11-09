import './Backlog.css';
import { Task } from './Task';

export const Backlog = ({ backlogData, leftBtnClk, rightBtnClk, deleteBtnClk }) => {


    const taskLoop = () => {
        let taskLoopArray = [];
        for (let i = 0; i < backlogData.length; i++) {
            taskLoopArray.unshift(
                <Task key={i} name={backlogData.length && backlogData[i].inputValue} leftBtnClk={() => leftBtnClk(backlogData[i])} rightBtnClk={() => rightBtnClk(backlogData[i])} deleteBtnClk={() => deleteBtnClk(backlogData[i])} />
            )
        }
        return taskLoopArray;
    }

    const allowDrop = (event) => {
        event.preventDefault();
    }

    const drop = (event) => {
        let data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
    }

    return (
        <div className='backlog-container'>
            <div className="backlog-top">
                <span>Backlog</span>
            </div>
            <div onDragOver={(event) => allowDrop(event)} onDrop={(event) => drop(event)} className="backlog-bottom">
                {taskLoop()}
            </div>
        </div>
    )
}