import './Task.css';


export const Task = ({ name, leftBtnClk, rightBtnClk, deleteBtnClk }) => {
    const leftArrow = require('../assets/leftarrow.png');
    const rightArrow = require('../assets/rightarrow.png');
    const deleteIcon = require('../assets/deleteicon.png');

    const drag = (event) => {
        event.dataTransfer.setData('text', event.target.id);
        console.log("drag start");
    }

    return (
        <div id='dragTask' draggable={true} onDragStart={(event) => drag(event)} className="task-parent">
            <div className="task-title">{name}</div>
            <div className="move-buttons">
                <div onClick={leftBtnClk} className='move-left'><img value={"left"} className="left-img" src={leftArrow} alt="left icon" /></div>
                <div onClick={rightBtnClk} className='move-right'><img className="right-img" src={rightArrow} alt="right icon" /></div>
            </div>
            <div onClick={deleteBtnClk} className="delete-button">
                <img className='delete-img' src={deleteIcon} alt="delete icon" />
            </div>
        </div>
    )
}