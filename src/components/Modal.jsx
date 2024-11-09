import { useState, useEffect } from 'react';
import './Modal.css';
import { OPTION_DATA } from '../constants/constant';
import close_btn from '../assets/close.png';

export const Modal = ({ setOpenModal, show, sendSelectedBucket }) => {


    const [optionValue, setOptionValue] = useState(OPTION_DATA[0].id);
    const [showModal, canShowModal] = useState(false);

    useEffect(() => {
        canShowModal(show);
    }, [show])

    useEffect(() => {
        console.log("key pressed inside use effect");
        function handleEscapeKey(event) {
            console.log("key pressed inside handleescapefunction");
            if (event.code === 'Escape') {
                console.log("escape down");
                setOpenModal(false)
            }
        }

        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            console.log("key pressed inside return");
            document.removeEventListener('keydown', handleEscapeKey);
        }
    }, [])

    const renderOption = () => {
        let renderOptionArr = [];
        for (let i = 0; i < OPTION_DATA.length; i++) {
            renderOptionArr.push(
                <option key={i} value={OPTION_DATA[i].id}>{OPTION_DATA[i].optionValue}</option>
            )
        }
        return renderOptionArr;
    }

    const renderModal = () => {
        if (showModal) {
            return (
                < div className='overlays' >
                    <div className='modal-window'>
                        <div onClick={() => setOpenModal(false)} className='close-modal'><img src={close_btn} alt="closeBtnImg" /></div>
                        <div className='modal-heading'>Please Select</div>
                        <select value={optionValue} onChange={(e) => { setOptionValue(e.target.value) }} className="container-select" name="container-select">       {/* think proper class name */}
                            {renderOption()}
                        </select>
                        <input onClick={() => { onSubmit() }} className='modla-submit' type="submit" value="Submit" />
                    </div>
                </div >
            )
        } else {
            return null;
        }
    }

    const onSubmit = () => {
        console.log("onsubmit       1    ", optionValue);
        sendSelectedBucket(Number(optionValue));
        console.log("onsubmit       2    ", optionValue);
        setOpenModal(false);
    }

    return (
        <>{renderModal()}</>
    )
}