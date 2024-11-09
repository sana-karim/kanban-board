import './Done.css';
import { Task } from './Task';

export const Done = ({ doneData, leftBtnClk, rightBtnClk, deleteBtnClk }) => {

    const taskLoop = () => {
        let taskLoopArray = [];
        for (let i = 0; i < doneData.length; i++) {
            taskLoopArray.unshift(
                <Task key={i} name={doneData.length && doneData[i].inputValue} leftBtnClk={() => leftBtnClk(doneData[i])} rightBtnClk={() => rightBtnClk(doneData[i])} deleteBtnClk={() => deleteBtnClk(doneData[i])} />
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
        <div className='done-container'>
            <div className="done-top">
                <span>Done</span>
            </div>
            <div onDragOver={(event) => allowDrop(event)} onDrop={(event) => drop(event)} className="done-bottom">
                {taskLoop()}
            </div>
        </div>
    )
}