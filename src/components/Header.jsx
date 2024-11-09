import './Header.css';

export const Header = () => {
    const icon = require('../assets/icon.png');

    return (
        <div className="header-container">
            <div className="sub-container">
                <div className="icon-container"><img className='img-icon' src={icon} alt="logo" /></div>
                <div className="header-title">Kanban Board</div>
            </div>
        </div>
    )
}