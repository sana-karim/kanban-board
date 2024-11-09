import { Backlog } from './Backlog';
import { Todo } from './Todo';
import { Ongoing } from './Ongoing';
import { Done } from './Done';
import './CardContainer.css';

export const CardContainer = ({ backlogData, todoData, ongoingData, doneData, leftBtnClk, rightBtnClk, deleteBtnClk }) => {
    return (
        <div className="card-parent">
            <Backlog backlogData={backlogData} leftBtnClk={leftBtnClk} rightBtnClk={rightBtnClk} deleteBtnClk={deleteBtnClk} />
            <Todo todoData={todoData} leftBtnClk={leftBtnClk} rightBtnClk={rightBtnClk} deleteBtnClk={deleteBtnClk} />
            <Ongoing ongoingData={ongoingData} leftBtnClk={leftBtnClk} rightBtnClk={rightBtnClk} deleteBtnClk={deleteBtnClk} />
            <Done doneData={doneData} leftBtnClk={leftBtnClk} rightBtnClk={rightBtnClk} deleteBtnClk={deleteBtnClk} />
        </div>
    )
}