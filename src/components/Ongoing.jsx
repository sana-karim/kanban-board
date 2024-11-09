import './Ongoing.css';
import { Task } from './Task';

export const Ongoing = ({ ongoingData, leftBtnClk, rightBtnClk, deleteBtnClk }) => {

    const taskLoop = () => {
        let taskLoopArray = [];
        for (let i = 0; i < ongoingData.length; i++) {
            taskLoopArray.unshift(
                <Task key={i} name={ongoingData.length && ongoingData[i].inputValue} leftBtnClk={() => leftBtnClk(ongoingData[i])} rightBtnClk={() => rightBtnClk(ongoingData[i])} deleteBtnClk={() => deleteBtnClk(ongoingData[i])} />
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
        <div className='ongoing-container'>
            <div className="ongoing-top">
                <span>Ongoing</span>
            </div>
            <div onDragOver={(event) => allowDrop(event)} onDrop={(event) => drop(event)} className="ongoing-bottom">
                {taskLoop()}
            </div>
        </div>
    )
}

