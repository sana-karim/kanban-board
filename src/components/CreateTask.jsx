import { useState } from 'react';
import './CreateTask.css';
import { Modal } from './Modal';


export const CreateTask = ({ sendSelectedBucket }) => {
    const [openModal, setOpenModal] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [error, showError] = useState(false);
    let generatedId = 0;

    const generateId = () => {
        generatedId = new Date().getTime();
    }

    const handleSubmitClick = (optionValue) => {
        if (inputValue) {
            showError(false);     //state Variable
            generateId();
            sendSelectedBucket({ inputValue, optionValue, generatedId });
            console.log("create task    ", optionValue);
            setInputValue('');
        } else {
            showError(true)       //state Variable
        }
    }

    return (
        <div className="create-task-container">
            <div className="input-task"><input value={inputValue} onInput={(e) => { setInputValue(e.target.value) }}
                className={`task-input-field ${error ? "emptyInputError" : null}`} type="text"

                placeholder={error ? 'Enter Task Name First' : 'Enter Task Name'} /></div>

            <div onClick={() => { setOpenModal(true) }} className="create-task"><button>Create task</button></div>
            <Modal setOpenModal={setOpenModal} show={openModal} sendSelectedBucket={handleSubmitClick} />
        </div>
    )
}